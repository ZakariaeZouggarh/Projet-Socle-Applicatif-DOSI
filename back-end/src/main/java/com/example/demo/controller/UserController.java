package com.example.demo.controller;


import com.example.demo.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dao.UserRepository;
import com.example.demo.entities.User;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController 
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository userRepository;


    @GetMapping("/all")
    public List <User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity <User> getUserById(@PathVariable(value = "id") Long userId){
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/adduser")
    public ResponseEntity<User> createUser(@RequestBody User user){
        try{
            User _user = userRepository
                    .save(new User(user.getNom(), user.getPrenom(), user.getEmail(), user.getVille(), user.getAge()));
            return new ResponseEntity<>(_user, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @PutMapping("/updatUser/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User userDetails, @PathVariable(value = "id") Long userid) throws ResourceNotFoundException {
        User user = userRepository.findById(userid)
                .orElseThrow(() -> new UserNotFoundException(userid));
        user.setNom(userDetails.getNom());
        user.setPrenom(userDetails.getPrenom());
        user.setEmail(userDetails.getEmail());
        user.setVille(userDetails.getVille());
        user.setAge(userDetails.getAge());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable(value = "id") Long userId){
        try{
            userRepository.deleteById(userId);
            return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
package com.example.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ELearningSpringCloudApplication {

	public static void main(String[] args) {
		SpringApplication.run(ELearningSpringCloudApplication.class, args);
	}

}

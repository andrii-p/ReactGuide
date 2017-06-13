package com.example.ReactExample;

import java.net.URL;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;

@SpringBootApplication
public class ReactExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactExampleApplication.class, args);
		
		if (args.length < 1){
			System.out.println("NO ARGUMENT");
		} else {
			try {				
				URL url = new URL(args[0]);
				
				System.out.println("READING URL - " + url);
				
				SyndFeedInput input = new SyndFeedInput();
				SyndFeed feed = input.build(new XmlReader(url));
				
				System.out.println(feed);
			} catch (Exception e) {
				e.printStackTrace();
			}				
		}
		
		
		
	}
}

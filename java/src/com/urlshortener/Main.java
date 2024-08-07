package com.urlshortener;

import java.util.HashMap;
import java.util.Scanner;

public class Main {
    private static HashMap<String, String> urlMap = new HashMap<>();
    private static final String BASE_URL = "http://short.url/";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Enter 1 to shorten URL, 2 to retrieve original URL, 0 to exit:");
            int choice = scanner.nextInt();
            scanner.nextLine();

            if (choice == 1) {
                System.out.println("Enter the original URL:");
                String originalUrl = scanner.nextLine();
                String shortUrl = shortenUrl(originalUrl);
                System.out.println("Short URL: " + shortUrl);
            } else if (choice == 2) {
                System.out.println("Enter the short URL:");
                String shortUrl = scanner.nextLine();
                String originalUrl = retrieveUrl(shortUrl);
                if (originalUrl != null) {
                    System.out.println("Original URL: " + originalUrl);
                } else {
                    System.out.println("URL not found.");
                }
            } else if (choice == 0) {
                break;
            } else {
                System.out.println("Invalid choice. Try again.");
            }
        }
        scanner.close();
    }

    private static String shortenUrl(String originalUrl) {
        String shortCode = generateShortCode();
        String shortUrl = BASE_URL + shortCode;
        urlMap.put(shortUrl, originalUrl);
        return shortUrl;
    }

    private static String retrieveUrl(String shortUrl) {
        return urlMap.get(shortUrl);
    }

    private static String generateShortCode() {
        return Long.toHexString(Double.doubleToLongBits(Math.random())).substring(6);
    }
}

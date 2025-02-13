package com.example.html_lesson.frame;

import javax.swing.*;

public class Frame extends JFrame{


    private void createAndShowGUI() {
        JFrame myFirstJFrame = new JFrame("My First JFrame");
        JLabel label = new JLabel("Geeks Premier League 2023");
        myFirstJFrame.add(label);
        myFirstJFrame.setSize(300, 200);
        myFirstJFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        myFirstJFrame.setVisible(true);
    }

}

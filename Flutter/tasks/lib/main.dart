import 'package:flutter/material.dart';
import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'login.dart';
import 'home.dart';

// void main() {
//   runApp(MyApp());
// }

Future<void> main() async {
      WidgetsFlutterBinding.ensureInitialized();
      SharedPreferences.setMockInitialValues({});
      SharedPreferences prefs = await SharedPreferences.getInstance();
      bool isLogged = (prefs.getBool('loggedin') ?? false);
      runApp(MaterialApp(
         title: 'Test',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: isLogged ? MyHomePage() : AnimatedSplashScreen(
            splash: Icon(
              Icons.favorite,
              color: Colors.white,
              size: 120.0,
            ),
            duration: 3000,
            splashTransition: SplashTransition.fadeTransition,
            backgroundColor: Colors.blue,
            nextScreen: MyLoginPage(title: "Login"))));
    }

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'login.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text("Tasks"),
      ),
      body: Container(
        margin: EdgeInsets.symmetric(vertical: 20.0),
        height: 300.0,
        child: ListView(
          scrollDirection: Axis.horizontal,
          children: <Widget>[
            Container(
              
      child: Card(
        child: InkWell(
          splashColor: Colors.blue.withAlpha(30),
          onTap: () {
            showDialog(
                            context: context,
                            builder: (context) {
                              return AlertDialog(
                                content: Text("Card tapped")
                              );
                            },
                          );
          },
          child: const SizedBox(
            width: 300,
            height: 100,
            child: Text('A card that can be tapped'),
          ),
        ),
      ),
    
            ),
            Container(
              width: 160.0,
              color: Colors.blue,
            ),
            Container(
              width: 160.0,
              color: Colors.green,
            ),
            Container(
              width: 160.0,
              color: Colors.yellow,
            ),
            Container(
              width: 160.0,
              color: Colors.orange,
            ),
          ],
        ),
        
      ),
      
      
      floatingActionButton: FloatingActionButton(
        onPressed: () async{
          SharedPreferences prefs = await SharedPreferences.getInstance();
            await prefs.setBool('loggedin', false);
          Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => MyLoginPage(title: "title")));
        },
        tooltip: 'Logout',
        child: Icon(Icons.logout),
      ),
    );
  }
}

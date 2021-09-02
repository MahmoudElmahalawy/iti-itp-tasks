import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'home.dart';

class MyLoginPage extends StatefulWidget {
  MyLoginPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyLoginPageState createState() => _MyLoginPageState();
}

class _MyLoginPageState extends State<MyLoginPage> {

  
    @override
  Widget build(BuildContext context) {
    const appTitle = 'Login';

    return MaterialApp(
      title: appTitle,
      home: Scaffold(
        appBar: AppBar(
          title: const Text(appTitle),
        ),
        body: const MyCustomForm(),
      ),
    );
  }
}

// Create a Form widget.
class MyCustomForm extends StatefulWidget {
  const MyCustomForm({Key? key}) : super(key: key);

  @override
  MyCustomFormState createState() {
    return MyCustomFormState();
  }
}


class MyCustomFormState extends State<MyCustomForm> {
 
  final _formKey = GlobalKey<FormState>();
  final usernameController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  void dispose() {
    // Clean up the controller when the widget is disposed.
    usernameController.dispose();
    passwordController.dispose();
    super.dispose();
  }


  @override
  Widget build(BuildContext context) {
   
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(height: 100),
          RichText(
  text: TextSpan(
    text: 'Username ',
    style: DefaultTextStyle.of(context).style,
    
  ),
),
          TextFormField(
            controller: usernameController,
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your username';
              }
              return null;
            },
          ),
          SizedBox(height: 50),
          RichText(
  text: TextSpan(
    text: 'Password ',
    style: DefaultTextStyle.of(context).style,
    
  ),
),
          TextFormField(
            controller: passwordController,
            obscureText: true,
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter your password';
              }
              return null;
            },
          ),
          SizedBox(height: 50),
          // Padding(
          //   padding: const EdgeInsets.symmetric(vertical: 26.0, horizontal: 20),
          //   child: ElevatedButton(
          //     onPressed: () {
          //       if (_formKey.currentState!.validate()) {
          //         ScaffoldMessenger.of(context).showSnackBar(
          //           const SnackBar(content: Text('Processing Data')),
          //         );
          //       }
          //     },
          //     child: const Text('Login'),
          //   ),
          // ),
          Align(
          alignment: Alignment.bottomCenter,
          child: ElevatedButton(
            // onPressed: () {},
            // child: const Text('Bottom Button!', style: TextStyle(fontSize: 20)),
            
            onPressed: () {
                    if (_formKey.currentState!.validate()) {
                      // ScaffoldMessenger.of(context).showSnackBar(
                      //   const SnackBar(content: Text('Processing Data')),
                      // );
                     if (usernameController.text == "Mahmoud") {
                       if (passwordController.text == "p@ssword") {
                          showDialog(
                            context: context,
                            builder: (context) {
                              return AlertDialog(
                                // Retrieve the text the that user has entered by using the
                                // TextEditingController.
                                content: Padding(
      padding: const EdgeInsets.only(top: 0),
      child: IntrinsicHeight(
        child: Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Expanded(
            child: Column(children: [
              Container(height: 120.0, width: double.infinity, color: Colors.yellow, child: Text(usernameController.text),),
              Container(height: 100.0, width: double.infinity, color: Colors.cyan, child: Text(passwordController.text),),
            ]),
          ),
          Expanded(child: ElevatedButton(onPressed: () async{
            SharedPreferences prefs = await SharedPreferences.getInstance();
            await prefs.setBool('loggedin', true);
            Navigator.pushAndRemoveUntil(
  context,
  MaterialPageRoute(builder: (context) => MyHomePage()),
  (Route<dynamic> route) => false,
);
          }, child: Text("Navigate to tasks"))),
        ]),
      ),
    )
                              );
                            },
                          );
                       }else {
                         showDialog(
                            context: context,
                            builder: (context) {
                              return AlertDialog(
                                // Retrieve the text the that user has entered by using the
                                // TextEditingController.
                                content: Text("Password is incorrect")
                              );
                            },
                          );
                       }
                     }else {
                       showDialog(
                            context: context,
                            builder: (context) {
                              return AlertDialog(
                                // Retrieve the text the that user has entered by using the
                                // TextEditingController.
                                content: Text("Username is incorrect")
                              );
                            },
                          );
                     }
                    }
                  },
                  child: const Text('Login', style: TextStyle(fontSize: 20)),
      ),
    ),
        ],
      ),
    );
  }
}

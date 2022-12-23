
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class NewEventScreen extends StatefulWidget{
     @override
     State<StatefulWidget> createState() {
       return new _NewEventScreen();
     }
}

class _NewEventScreen extends State<NewEventScreen> {
     final TextEditingController _textEditingController = TextEditingController();
     @override
     Widget build(BuildContext context) {
      return Scaffold(appBar: AppBar(
      title: Text("New Event"),
      backgroundColor: Colors.deepPurpleAccent,
      ),
      body:Column(
        children: [
           Padding(
                padding: EdgeInsets.fromLTRB(0, 20, 0, 20),
                child: Container(
                  padding: const EdgeInsets.all(0.0),
                 
                ), //Container
              ), //Padding
          TextField(
           
             decoration: InputDecoration(
              border: OutlineInputBorder(),
              hintText: 'Enter a search term',
            ),
            controller: _textEditingController,
          ),
          ElevatedButton(onPressed: () {
            String newEventText = _textEditingController.text;
            Navigator.of(context).pop(newEventText);
          }, 
         
          child:Text("ADD")
          ),
        ],
      )
      );
     }
}
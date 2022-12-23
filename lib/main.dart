import 'package:flutter/material.dart';
import 'new_event.dart';

void main()  => runApp(
  
  MaterialApp(
    title: 'Flutter Demo',
  theme: ThemeData(
    primarySwatch: Colors.blue,
    appBarTheme: AppBarTheme(
        iconTheme: IconThemeData(color: Colors.black),
        color: Color.fromARGB(92, 255, 77, 77), //<-- SEE HERE
),
  ),
  home: MyApp()));

class MyApp extends StatefulWidget{
  @override
  State<StatefulWidget> createState() => _MyApp();
}



class _MyApp extends State<MyApp>{
  
  final List<Widget> _list = [
    Text("Notes")
  ];
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          

       
  centerTitle: true,
  title: Row(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      
      const SizedBox(
        width: 10,
      ),
      const Text(
        'NotesBeads',
        style: TextStyle(color: Colors.black),
      ),
    ],
  ),
  backgroundColor: Colors.deepPurpleAccent, //<-- SEE HERE

        ),
        body: ListView.builder(
          itemCount: _list.length,
          itemBuilder:((context,index) => _list[index])),
          floatingActionButton: Builder(
            builder: (context) {
            return FloatingActionButton(
            onPressed: () async{
            String newText = await Navigator.of(context).push(MaterialPageRoute(builder: (context) => NewEventScreen()));
            setState((){
              _list.add(Text((newText)));
            });
          
          },
          
          
          
          child: Icon(Icons.add),
          );
    }
    ),
    ),
  );
}
}
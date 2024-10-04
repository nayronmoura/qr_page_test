import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() async {
  final SharedPreferences prefs = await SharedPreferences.getInstance();

  return runApp(MyApp(prefs: prefs));
}

class MyApp extends StatelessWidget {
  final SharedPreferences prefs;
  const MyApp({Key? key, required this.prefs}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final String? companyName = prefs.getString('company_name');
    final String? companyId = prefs.getString('company_id');
    final String? logoUrl = prefs.getString('logo_url');

    return MaterialApp(
      title: "Plugin Example",
      home: Scaffold(
        body: Center(
          child: Column(
            children: [
              Text(companyName.toString()),
              Text(companyId.toString()),
              if (logoUrl != null) Image.network(logoUrl)
            ],
          ),
        ),
      ),
    );
  }
}

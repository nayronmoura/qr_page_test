import 'package:flutter/material.dart';
import 'package:flutter_web_qrcode_scanner/flutter_web_qrcode_scanner.dart';

class AutoScanExample extends StatefulWidget {
  const AutoScanExample({Key? key}) : super(key: key);

  @override
  State<AutoScanExample> createState() => _AutoScanExampleState();
}

class _AutoScanExampleState extends State<AutoScanExample> {
  String? _data;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        _data == null
            ? Container()
            : Center(
                child: Text(
                  _data!,
                  style: const TextStyle(fontSize: 18, color: Colors.green),
                  textAlign: TextAlign.center,
                ),
              ),
        FlutterWebQrcodeScanner(
          cameraDirection: CameraDirection.back,
          onGetResult: (result) => setState(() => _data = result),
          stopOnFirstResult: false,
          width: MediaQuery.of(context).size.width * 0.8,
          height: MediaQuery.of(context).size.height * 0.8,
          onError: (error) {},
          onPermissionDeniedError: () {},
        ),
      ],
    );
  }
}

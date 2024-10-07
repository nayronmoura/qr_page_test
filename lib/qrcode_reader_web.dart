import 'package:flutter/material.dart';
import 'package:qrcode_reader_web/qrcode_reader_web.dart';

class QrReader extends StatefulWidget {
  const QrReader({super.key});

  @override
  State<QrReader> createState() => _QrReaderState();
}

class _QrReaderState extends State<QrReader> {
  final list = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Example App"),
      ),
      body: SafeArea(
        child: Column(
          children: [
            QRCodeReaderTransparentWidget(
              onDetect: (QRCodeCapture capture) =>
                  setState(() => list.add(capture)),
              targetSize: 250,
            ),
            Expanded(
              child: ListView.builder(
                itemCount: list.length,
                itemBuilder: (_, index) {
                  return ListTile(title: Text(list[index].raw));
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

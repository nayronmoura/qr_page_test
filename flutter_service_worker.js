'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1ede165116dcaea8cd6f9f3f8156385d",
"index.html": "ad018ad4b5a94a17c7ef70e32b05018a",
"/": "ad018ad4b5a94a17c7ef70e32b05018a",
"main.dart.js": "d9ffae90ae390941bca366b62e3ace63",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bf05c309e55ee249288d8f62fbe7a2d2",
"assets/AssetManifest.json": "f416d9c3a177d0cf24d727ee74c38613",
"assets/NOTICES": "86428aab321e2e31b79e8141afb0f3c6",
"assets/FontManifest.json": "bce3c698b05380d1710d6292d5af595f",
"assets/AssetManifest.bin.json": "4dfb1d0835e0f75e617d0ccebc5feb2a",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fmn_core/assets/images/maintenance.png": "79585a71bef3835d5ebe17294720f1f6",
"assets/packages/fmn_core/assets/images/fmn_logo.png": "434a867fc85f28ef346a50fa962cdfbe",
"assets/packages/fmn_core/assets/images/empty.png": "cd9c8cecc12bcbcb99361c7ca1c42121",
"assets/packages/fmn_core/assets/images/peer_support_empty_channel.png": "bbd2115cff9dc4d8a7aab869b9bb3e38",
"assets/packages/fmn_core/assets/images/mastered.png": "ac7ef942fdff859ee955c383a187ec83",
"assets/packages/fmn_core/assets/images/assistant_avatar.png": "0e92dd580e7b7c086a801769613623a3",
"assets/packages/fmn_core/assets/images/youtube_no_thumbnail.png": "d512229468ed24bac3d07d37e7c56a1b",
"assets/packages/fmn_core/assets/images/error_folder.png": "78bd0899e4950990e8dc33e345491910",
"assets/packages/fmn_core/assets/images/error.png": "a93b54298110c0f172fab8f3b15ffbc2",
"assets/packages/fmn_core/assets/images/channel_avatar.png": "1d0577ad09efcddc515f6b2795b987bc",
"assets/packages/fmn_core/assets/lotties/fmn_loader_icon.json": "328480d9de9898351cdc9b3683d5f1b9",
"assets/packages/fmn_core/assets/lotties/typing_dots.json": "a23ebe5c96f6b573619c034e1317d80b",
"assets/packages/fmn_core/assets/audio/chime_done.wav": "136f6b79051dab9d629c22599183d8f7",
"assets/packages/fmn_core/assets/icons/close_2.svg": "c80f9591e69df13577d9e24c6b26cb68",
"assets/packages/fmn_core/assets/icons/finger_up_icon.svg": "06090784020b5d7adad59fa0f7c1d1d6",
"assets/packages/fmn_core/assets/icons/message_hidden.svg": "c4070761199ae40f133ec533bfd4ee54",
"assets/packages/fmn_core/assets/icons/line_dashed_item.svg": "400c112373162fa6869e7ef7ca2612d1",
"assets/packages/fmn_core/assets/icons/account.svg": "4f2fbb3f5be2258255cb5ce6bf75ee80",
"assets/packages/fmn_core/assets/icons/alert.svg": "11196940aa1e3e81de39ac65471b77d1",
"assets/packages/fmn_core/assets/icons/assistant_avatar.svg": "09805978f487b5e1d70595d00dbba685",
"assets/packages/fmn_core/assets/icons/youtube_button.svg": "c712a97b75bb415f0e37667970882655",
"assets/packages/fmn_core/assets/icons/download_success.svg": "440ffa01d8265ac82ffae949776c82f6",
"assets/packages/fmn_core/assets/icons/bulk_search.svg": "6570e939e8f04ac641d84a34a721729c",
"assets/packages/fmn_core/assets/icons/dashed_section.svg": "83105a7b99de2a7bbc7ab551dca1b246",
"assets/packages/fmn_core/assets/icons/file.svg": "811761631d958d83d1bc10c6de4a1551",
"assets/packages/fmn_core/assets/icons/maximize.svg": "2f30e6d6877d836e90b018d4f1cdf093",
"assets/packages/fmn_core/assets/icons/resource_pdf.svg": "81b2b4e04fd058f513670d81bae1e012",
"assets/packages/fmn_core/assets/icons/link.svg": "c275306e4e92f98bd91acf41d294eac9",
"assets/packages/fmn_core/assets/icons/check_tick_badge.svg": "440508db2efd894352e3fecb827baef9",
"assets/packages/fmn_core/assets/icons/apple_logo.svg": "be46c2e387d2340eaa2ebf59ab001e90",
"assets/packages/fmn_core/assets/icons/minimize.svg": "73e915ac4f6e4a3216032da528be85e1",
"assets/packages/fmn_core/assets/icons/movie.svg": "6076114309b6ea4bbd7bcde51b26118c",
"assets/packages/fmn_core/assets/icons/mastered.png": "949e91755a755437d61a03a47d129f94",
"assets/packages/fmn_core/assets/icons/download.svg": "217709690ac12619e75a96331ac4d0d2",
"assets/packages/fmn_core/assets/icons/external_link.svg": "7d329ae67dfa903828559894306b6534",
"assets/packages/fmn_core/assets/icons/volume.svg": "743cfec2c8a6746be3141930d0026448",
"assets/packages/fmn_core/assets/icons/FMN_Loader_Square.json": "fc859a2a6e4b64dd58cc94fdd7407f17",
"assets/packages/fmn_core/assets/icons/mastery_hat.svg": "ff2fdaa74d0fb9e84291be89eada6f7a",
"assets/packages/fmn_core/assets/icons/flag.svg": "69ec34a6d6f5de779c579e33d3efe8b7",
"assets/packages/fmn_core/assets/icons/orange_check.svg": "f27ee31ba194b297f71d6f0d5062f73e",
"assets/packages/fmn_core/assets/icons/muted.svg": "4787e379baf243702e2a68b2dc753d85",
"assets/packages/fmn_core/assets/icons/microsoft_logo.svg": "38364bc65e5f319ca528e143d5da8478",
"assets/packages/fmn_core/assets/icons/warning.svg": "ae69720e9fcb4200e727d125b4fd8542",
"assets/packages/fmn_core/assets/icons/info.svg": "ed1f366ff2ecaaa57b612674046ed0c1",
"assets/packages/fmn_core/assets/icons/close.svg": "ffccef042a51adb089892345d331b03e",
"assets/packages/fmn_core/assets/icons/check_circle.svg": "76216a304165a51bddc732aca4525d72",
"assets/packages/fmn_core/assets/icons/incorrect_answer.svg": "15be168b166e7f7a8d4ee7159416c970",
"assets/packages/fmn_core/assets/icons/resource_link.svg": "ed00c9176dbdcac5f36de18c7b62c7f5",
"assets/packages/fmn_core/assets/icons/feedback_down.svg": "8e03f4b34d65201d4c74dd6be0fd8a80",
"assets/packages/fmn_core/assets/icons/hands.png": "1b3bea38d6e9c327481b9fae1ce4b693",
"assets/packages/fmn_core/assets/icons/completed_section.svg": "497b310e15a17594f06c893f67fa8946",
"assets/packages/fmn_core/assets/icons/back.svg": "a83ffcf55c87b67f009d7252fb501ac1",
"assets/packages/fmn_core/assets/icons/unmuted.svg": "7765af6caeae68a7d64bdff0d0df9e98",
"assets/packages/fmn_core/assets/icons/check_mark.svg": "de46ea769285d5037dbee950b85483ae",
"assets/packages/fmn_core/assets/icons/send.svg": "8e0dc8b7b6614e64841b43031a8889db",
"assets/packages/fmn_core/assets/icons/incorrect.svg": "80620dbc76a5a51ed51df84394e6450d",
"assets/packages/fmn_core/assets/icons/in_progress_item_anchor.svg": "2ceab43efbff4149c95cc918e2d205d0",
"assets/packages/fmn_core/assets/icons/audio.svg": "d5c5b1b97849b7a1f6ecd25710e3a5b4",
"assets/packages/fmn_core/assets/icons/success.svg": "0e7f14036e8e587233b66b12c7033b1b",
"assets/packages/fmn_core/assets/icons/eye.svg": "e6df79274fb2526c282112d0757be43a",
"assets/packages/fmn_core/assets/icons/correct_answer.svg": "b8423a890ce7b3e9e0233667f1b760c1",
"assets/packages/fmn_core/assets/icons/filter.svg": "c789d535546e937ab30c5c841aee21af",
"assets/packages/fmn_core/assets/icons/google_logo.svg": "b35444df15d9f0f6cc12ed9945adfb71",
"assets/packages/fmn_core/assets/icons/feedback_up.svg": "359fa0d03942f52faa6aae1b0abce150",
"assets/packages/fmn_core/assets/icons/close_x.svg": "fe68ce2d95d6c8070f3987eddda05c99",
"assets/packages/fmn_core/assets/icons/pause.svg": "9a1fbf2817c60048ce2cf4dc31aa76f0",
"assets/packages/fmn_core/assets/icons/resource_audio.svg": "466c8d90062355a11e45cb741cf79a93",
"assets/packages/fmn_core/assets/icons/avatar.svg": "1acc136365b0a4a9c1cd04c1694c23be",
"assets/packages/fmn_core/assets/icons/resource_video.svg": "8e3194a17f4159b4b3164ce655c6f070",
"assets/packages/fmn_core/assets/icons/submit.svg": "112a3b21c61437ba458d8ada17492e92",
"assets/packages/fmn_core/assets/icons/download_error.svg": "c99a0f7556f0b262900b71cdfb8d2c90",
"assets/packages/fmn_core/assets/icons/un_muted.svg": "913a14101ab3f3908e44b978f8096957",
"assets/packages/fmn_core/assets/icons/heart.svg": "6eea9aec6b54e34479824084c5745d6e",
"assets/packages/fmn_core/assets/fonts/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/packages/fmn_core/assets/fonts/Lato-LightItalic.ttf": "2404a6da847c878edbc8280745365cba",
"assets/packages/fmn_core/assets/fonts/OpenSans_LightItalic.ttf": "d62ffc8636d38da041db170d747e7bbe",
"assets/packages/fmn_core/assets/fonts/OpenSans_ExtraBoldItalic.ttf": "72523667c9f8e19fcbcc2e1af6cf9b6e",
"assets/packages/fmn_core/assets/fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/packages/fmn_core/assets/fonts/OpenSans_Bold.ttf": "f6f9a437c7611aba2c8fcf59da852df3",
"assets/packages/fmn_core/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/packages/fmn_core/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/packages/fmn_core/assets/fonts/OpenSans_Regular.ttf": "5737a677bc9fbb02fc4d31d928eba592",
"assets/packages/fmn_core/assets/fonts/OpenSans_Light.ttf": "9bed2650e63646165a369c37da9ed7e1",
"assets/packages/fmn_core/assets/fonts/OpenSans_BoldItalic.ttf": "c2b3da44e3213358d3d947c395b8a0a2",
"assets/packages/fmn_core/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/packages/fmn_core/assets/fonts/OpenSans_Italic.ttf": "0f45fe75b32c6c50e92d0b9d898452d2",
"assets/packages/fmn_core/assets/fonts/Lato-BlackItalic.ttf": "047217f671c9e0849c97d43e26543046",
"assets/packages/fmn_core/assets/fonts/OpenSans_ExtraBold.ttf": "1a525bcbd0a7a571e79094649268c1d5",
"assets/packages/fmn_core/assets/fonts/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/packages/fmn_core/assets/fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/packages/fmn_core/assets/fonts/OpenSans_SemiBoldItalic.ttf": "adb1628e31f8b37677c4249629d68f8d",
"assets/packages/fmn_core/assets/fonts/OpenSans_SemiBold.ttf": "b14504bd6cacbd174a4c1346f6e330c6",
"assets/packages/fmn_core/assets/fonts/Lato-ThinItalic.ttf": "2b26bc77c3f9432c9d4ca4911520294d",
"assets/packages/fmn_core/assets/animations/loveheart.json": "f1c6d853a53b9ae0dc0e9787c54a9111",
"assets/packages/fmn_core/assets/animations/loading.json": "d000a5cc19ce7296e55761dd5acd47d4",
"assets/packages/stream_chat_flutter/images/placeholder.png": "30d340bd4f082a7ef08376e916d960d8",
"assets/packages/stream_chat_flutter/images/giphy_icon.png": "0258059543bf3666bf0bdbe932592208",
"assets/packages/stream_chat_flutter/svgs/icon_picture_empty_state.svg": "cd17bcb38aa673d1765ee69f9a321929",
"assets/packages/stream_chat_flutter/svgs/icon_pen_write.svg": "93279740dc02da26397cd43358cec4e0",
"assets/packages/stream_chat_flutter/svgs/video_call_icon.svg": "0dac4d210cf07faf50367cd897ada34a",
"assets/packages/stream_chat_flutter/svgs/giphy_icon.svg": "ecb1168250a8e9e5b2df52e0e34a3683",
"assets/packages/stream_chat_flutter/svgs/icon_camera.svg": "5a7c1f19e6670fbf3c5ad1deaffdfd5c",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_RTF.svg": "80211524634cdaf49221ea987641fb2b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check_all.svg": "c8c7fb7fd4bf6868740d70d36c5163f2",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_TXT.svg": "02eee06ebb5f90f668acbd150347eddb",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_MD.svg": "3730f0b240e6962d03f9ffecc8ba6b60",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_error.svg": "59bbe2e77294f229159fb2aeeadcdef0",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_User_add.svg": "ca29f019afc62bb588b34a09551ae19b",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Search.svg": "ae5f4d7aeacf823ef1be5c0b91973920",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_RAR.svg": "27978098749482388b42bcbe5114a530",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_close_black.svg": "1b9deb59c7836e342cf15cfa9112fc3c",
"assets/packages/stream_chat_flutter/lib/svgs/icon_SHARE.svg": "2be93888885f50b0f2641b35ea2f5b5a",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_XLSX.svg": "bf28d69f1f55b6b04d4836a797c14531",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_record.svg": "d1b6755fc495accab05c7e595e2f1fcb",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_message.svg": "0befbb5c5df2a0e601d37f9617e16ca2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_close_sml.svg": "bd3010445035406c174d0137cd1d8893",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_pen-write.svg": "bb0f26bfe3c6e57b1565c24e94dc1909",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_No%2520channel.svg": "da759dbf54a6e0858ede6952f8e5e953",
"assets/packages/stream_chat_flutter/lib/svgs/video_call_icon.svg": "0dac4d210cf07faf50367cd897ada34a",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check_big.svg": "f92095a18204bdca79131e5e295a82e8",
"assets/packages/stream_chat_flutter/lib/svgs/STREAM%2520MARK%25201.svg": "197f0bdae9c937be1ecf4a107cf87d88",
"assets/packages/stream_chat_flutter/lib/svgs/icon_moon.svg": "c70d6c5be8a8f0fa998592f43219cab5",
"assets/packages/stream_chat_flutter/lib/svgs/files.svg": "ad39ce4a4c661f61336bf24b6c7af07b",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_TAR.svg": "60cdea7f8a30e07480badd17f6efe9d9",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_left.svg": "f41c288202a6c657bbc448f78208debb",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_picture.svg": "1b1879a202a491ceb39720a9bd4ded14",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_empty_circle_left.svg": "ba250f5586e12133778a34e43b26a76b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_save.svg": "04476852aec6f14fd7b92145032d3017",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_cloud_download.svg": "481b6ba2aae9f1a229be0ace4fa827ee",
"assets/packages/stream_chat_flutter/lib/svgs/icon_mentions.svg": "47311213de2d3993be49c0b46c1d664c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_thumbs_down_reaction.svg": "f86b823d9a46d2bf6eec90e4cac333a6",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_circle_up.svg": "6040dc689ef0f2f3f69f5b30c64e19d5",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_copy.svg": "fe5d2ae30b229c0662ae79adabb08bb5",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_ZIP.svg": "2b638aac5ccfa6ca35f17cbb4cf282fd",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_DOC.svg": "7bd182d6eb10e2a8ee603514d3aae222",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_download.svg": "c97b54bcd0afbf660eda2a1489f8d346",
"assets/packages/stream_chat_flutter/lib/svgs/settings.svg": "e269c1c8e828e064991aee732716e868",
"assets/packages/stream_chat_flutter/lib/svgs/mentions.svg": "5895f23c2ef7d74ba857402a00b3a7e1",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_message_unread.svg": "648ce5feb3a3fc8b5562220c42a58c95",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_search.svg": "96d4562e2662f1c5cf98815fa1b60b0d",
"assets/packages/stream_chat_flutter/lib/svgs/eye-line_big.svg": "c95e43b42a8fe3afcb8f4a9af4ba339e",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PPTX.svg": "c362cf1827e0ec1d78ccd4395d226d4c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_love_reaction.svg": "862f3ed12072950a57d9de07c8b5a8d2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_user_settings.svg": "2289d8af192a558fcad87173b7dae09f",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_html.svg": "6465f1a4a80c2805c2b9894c7f25494a",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_smile.svg": "fcf16ae8a626e1edb9b6b53286f29c83",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_right.svg": "5fd2ba93fe0f2ace64d2eec95e897ac5",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_close.svg": "637cefb508c6c762bc0125510a5e1fce",
"assets/packages/stream_chat_flutter/lib/svgs/flag.svg": "ad96dd68a211f5b61ed14ebdd5155ff2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_mute.svg": "e6d35d5fdc93bd80411ee3b250f95e3c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_lightning-command%2520runner.svg": "bca3bcb8841b25693945aea9f66dbc67",
"assets/packages/stream_chat_flutter/lib/svgs/icon_delete_grey.svg": "b78745df166d13379c2b4727d8c7fc6b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_Thread_Reply.svg": "8a9b5c69f0d5b885ae4a0134d8fb5ea2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_send_message.svg": "415eb57116854b04b92fb92ba7fae9eb",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_edit.svg": "c6c7779ca0a4c02180765e4a538fe07c",
"assets/packages/stream_chat_flutter/lib/svgs/share_arrow.svg": "dc9e58ff41fc98e930c04861edf274a8",
"assets/packages/stream_chat_flutter/lib/svgs/Giphy%2520icon.svg": "1ea05bbb402326e534d905d8a7147d12",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Camera.svg": "a21d5808436e520b533d05383a95c88a",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_user_delete.svg": "ae50b6a2729d61084482ec2f52f2ca6e",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_attach.svg": "f8cbb1f109c479fe8060b7a4373e6282",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_notification.svg": "4d22eb100006d4dc45dfe140b7b5f152",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_User_deselect.svg": "f8307c48bdca665d1e2a6c5b263338f0",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_arrow_right.svg": "cef623b244e5e3de7a7ec2212fe08726",
"assets/packages/stream_chat_flutter/lib/svgs/icon_pin.svg": "9c8a9824e1da800a1246c6f7f0bbbd9e",
"assets/packages/stream_chat_flutter/lib/svgs/UI_Reverse%2520Pagination%2520Loading.svg": "fc48c47d0c4ddf7bbe7f6e4a9fdb19f7",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_time.svg": "87de185a105ee0c3613f4720a0921b6a",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_curve_line_left_up.svg": "37b80269ac16708c0cc93fe7e303de90",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_CSV.svg": "3d5faddc2dce3ab9609dd6cd89f7a4b8",
"assets/packages/stream_chat_flutter/lib/svgs/giphy_icon.svg": "ecb1168250a8e9e5b2df52e0e34a3683",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_delete.svg": "7015c5ebd7d774c5b8de207bebd65e78",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check.svg": "2c04e6ad1230c568ab06d4d23be2ba62",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_thumbs_up_reaction.svg": "0b1f3ccc43d0dd761c21133e3c97e4fe",
"assets/packages/stream_chat_flutter/lib/svgs/icon_flag.svg": "ef5a011e7d58d95065ec24841b3301d9",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_menu_point_v.svg": "c9b71afb8f93f627b209a9c11a755ba4",
"assets/packages/stream_chat_flutter/lib/svgs/pictures.svg": "74b029062379e9719ef7f45da914b3a4",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_circle_right.svg": "063bfba9d4e2adb004ad9cbaf73eaa0b",
"assets/packages/stream_chat_flutter/lib/svgs/volume-up.svg": "5df9a3a183126038faccea9e30e9859a",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Files.svg": "89c153fabdb0c697ea7c5fc38685e9d9",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_DOCX.svg": "71373f44f659d095048eb9fd3bd89dba",
"assets/packages/stream_chat_flutter/lib/svgs/giphy%2520icon%2520blue.svg": "90a9fc1bc3169a4027a7d1e5631f854b",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PDF.svg": "72b645180a4095d5f7c132fe5f1a537f",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_LOL_reaction.svg": "9bdaa10d600b02ff3742ecb9432f8083",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PPT.svg": "86d29f47afd46396973646c12c730813",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_up.svg": "a83cfe5943525699308de701bdc586d9",
"assets/packages/stream_chat_flutter/lib/svgs/icon_retry.svg": "1902bba7b598c43d8f49d9fac3af241b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_group.svg": "2f30b55f82e8dc1d9a5375673fac23b8",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_ODT.svg": "1d888fe0910324b6229f55a8b219f426",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_contacts.svg": "2f30b55f82e8dc1d9a5375673fac23b8",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_Generic.svg": "a6a1c31ed5a6f0312f8fc4faf6f403c8",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check_send.svg": "83e9ec25419bfef4224b6bdbf922d506",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_camera.svg": "2fd8b5ee35c68733e7bd7d4b8ce8b1c3",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_wut_reaction.svg": "7c385077d6c23f869319f9afb54d2c5c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_grid.svg": "069ddcc807baed602f50fa3dcf8219e4",
"assets/packages/stream_chat_flutter/lib/svgs/imgur.svg": "7433ee061b383b75a3db4a78ab2b7476",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_eye-off.svg": "16a86807a0edab18315b2063befa04b3",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_user.svg": "288f7d3f089636d4643a6de75f3dc7c6",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_XLS.svg": "8fd7b98002bdfe53422c79cf1a0f4db8",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_down.svg": "b8eff7450293b41cec3759a29ac536b6",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_curve_line_left_up_big.svg": "b963e0bfb52513c29cbd409ef1c30c6d",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PPTX-1.svg": "bf49d89aff0be4b06ff062185cbd8195",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_7z.svg": "1b4cb1160bc61b31c7dd8f3daa5eeac9",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_AAC.svg": "01245fbce9ca4959a45cd0af0af40df5",
"assets/packages/stream_chat_flutter/animations/typing_dots.json": "3da1c94690095d3a96014b4c695227b7",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "c96ed13569b7fc0a702bb4010543aadb",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "02f9b76737fbddedf9691be54bb177d8",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "7584e6f52c6f781412a1635419971c37",
"assets/packages/flutter_vector_icons/fonts/FontAwesome6_Regular.ttf": "e517a24df4f47422ae175c5c67b6a658",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "693a95b616c259aa50840aa969d55cc0",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "6d10e4415c0e1f99141223656aafc221",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "95dd7e48f00adeed665f41c346183ed5",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "7f8612f75ad62ce5dc0eb749e2a266fc",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "54067b2c2568f2f1f7741b9cf6a1bf49",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "da83275f1c96818e4dfec4ed89e12101",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "2f8069182dfd33de1a00dd1eaec056bf",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "3a65f2a8c710c26e89bfd94e1c4873f0",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "f535dd1ca3db862ce86fdd043f07029f",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "4fc4c56a74935683f7b7fb6d19222dce",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "2dbce26941bb01ab737e612ed936e118",
"assets/packages/flutter_vector_icons/fonts/FontAwesome6_Solid.ttf": "fb7326a1c0f15703054c1aa2f50ab794",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "f6eb618462bd8c90c37614e72b5b021f",
"assets/packages/flutter_vector_icons/fonts/FontAwesome6_Brands.ttf": "b3da1f6a6d035aeadc00abba7728611a",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "de821ddd53854c0a12670060746222fe",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "a20a7aec07144aedd58cd07d51abfec6",
"assets/fonts/MaterialIcons-Regular.otf": "9e0cc54806a7bb9def41b6dc19e634a5",
"assets/assets/images/phone-qr.png": "2543480ba4f565c1be0f969adc3ad710",
"assets/assets/images/rectangle.svg": "69aeb8c8a5efe3936f093a0ff0de19e2",
"assets/assets/images/relaxing-extended.png": "0b4a547f33742cfcbbccd499b726af82",
"assets/assets/images/forget-me-not-logo-bottom.svg": "d5532be34019f6fbb1d978727200e14d",
"assets/assets/images/qr-code.svg": "7e6cf66323bd23eab76199fb2991e332",
"assets/assets/images/old-lady.png": "3c0efee9c8aa423fd81413973706e7ba",
"assets/assets/images/square.svg": "741f3d80463ad07945c55694ec0b235d",
"assets/assets/images/ytb-sir.png": "e901056b5e4e6bf7092e252c9ffca135",
"assets/assets/images/northline-logo.svg": "fcba4ef13e8aade618b1f1b8c7c4a151",
"assets/assets/images/old-sir.png": "b9e82c32f5121f37cdf7d0be359b8880",
"assets/assets/images/relaxing.png": "829e4517891bda612bd653589c1c8277",
"assets/assets/audio/incorrect.mp3": "945c2f4c21dfb389792dd02588dc3b72",
"assets/assets/audio/chime_done.wav": "136f6b79051dab9d629c22599183d8f7",
"assets/assets/audio/success.wav": "6621baf055f5c3aaec7888223fc8551e",
"assets/assets/audio/question_mastery.mp3": "56ce9bbd1299bbcf736210446d4fed35",
"assets/assets/icons/question_timer.svg": "ad6ab8188d7aebe0542bdd48f3d44c83",
"assets/assets/icons/mastery_goal.svg": "60b1b16ab129f3447efa727c83ed4a2c",
"assets/assets/icons/logout.svg": "be93cfbf0d8d9ae4874c8fe3fb24acdc",
"assets/assets/icons/question_count.svg": "e1866560a292b6ef0cb557d8ec30d299",
"assets/assets/icons/clock-one-thirty.svg": "4c00b591f18a739199fff1b9511fad0f",
"assets/assets/icons/clock-two.svg": "ad6ab8188d7aebe0542bdd48f3d44c83",
"assets/assets/icons/my-learning.svg": "e1866560a292b6ef0cb557d8ec30d299",
"assets/assets/icons/green-check.svg": "de5c703509a455bb1650e798d2cd09bf",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

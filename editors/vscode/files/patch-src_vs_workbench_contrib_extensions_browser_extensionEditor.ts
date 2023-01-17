--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2022-10-12 10:08:52 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1711,7 +1711,8 @@ export class ExtensionEditor extends EditorPane {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 

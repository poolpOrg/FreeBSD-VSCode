--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2024-01-31 22:36:21 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1775,7 +1775,8 @@ export class ExtensionEditor extends EditorPane {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 

--- build/npm/postinstall.js.orig	2019-06-08 04:51:50 UTC
+++ build/npm/postinstall.js
@@ -26,6 +26,13 @@ function yarnInstall(location, opts) {
 		args.push('--ignore-optional');
 	}
 
+	const addargs = ['--frozen-lockfile', '--offline', '--no-progress', '--verbose'];
+	addargs.forEach(arg => {
+		if (original.indexOf(arg) > -1) {
+			args.push(arg)
+		}
+	});
+
 	console.log('Installing dependencies in \'%s\'.', location);
 	const result = cp.spawnSync(yarn, args, opts);
 
@@ -71,7 +78,7 @@ runtime "${runtime}"`;
 }
 
 yarnInstall(`build`); // node modules required for build
-yarnInstall('test/smoke'); // node modules required for smoketest
+// yarnInstall('test/smoke'); // node modules required for smoketest
 yarnInstallBuildDependencies(); // node modules for watching, specific to host node version, not electron
 
 // Remove the windows process tree typings as this causes duplicate identifier errors in tsc builds
@@ -79,4 +86,4 @@ const processTreeDts = path.join('node_modules', 'wind
 if (fs.existsSync(processTreeDts)) {
 	console.log('Removing windows-process-tree.d.ts');
 	fs.unlinkSync(processTreeDts);
-}
\ No newline at end of file
+}

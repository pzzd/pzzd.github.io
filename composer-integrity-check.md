# Add an integrity check for file dependencies in Composer

When you include javascript files from a CDN, it's recommended that you include the script tag integrity attribute to confirm the source file has not been manipulated. You can add this same integrity check in Composer too.

For each file for which you need an integrity check, use `sha1sum` to make a message digest.
```
$ sha1sum webapp/vendor/jquery/jquery/jquery-3.4.1.min.js 
88523924351bac0b5d560fe0c5781e2556e7693d  webapp/vendor/jquery/jquery/jquery-3.4.1.min.js
```

Then add this string to composer.json. Running `composer up` should still be successful.
```
{ 
  "type": "package",
  "package": {
    "name" : "jquery/jquery",
    "version": "3.4.1",
    "dist": {
      "url": "https://code.jquery.com/jquery-3.4.1.min.js",
      "type": "file",
      "shasum": "88523924351bac0b5d560fe0c5781e2556e7693d"
    }
  }
}
```

In subsequent updates, if the source file has changed, it should be detected by Composer. You can confirm this check happens by changing `url` above to "https://code.jquery.com/jquery-3.4.0.min.js" and then running `composer up`. You should get an error like this.
```
In FileDownloader.php line 209:
                                                                               
  The checksum verification of the file failed (downloaded from https://code.  
  jquery.com/jquery-3.4.0.min.js)                                              
```                                                                               

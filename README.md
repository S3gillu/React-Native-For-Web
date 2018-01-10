# React-Native-For-Web

*****************************************************************************************************************************************************
                                                             REACT NATIVE WEB
****************************************************************************************************************************************************

(1) With React Native for Web, styles are written just like they would be for React Native, rather than with CSS.
    
    This has the benefit of allowing us to write a single set of styles, which will work on both native mobile and the web.
 
** Installation steps :-

  (i) npm install -g create-react-native-app

  Note: -> create-react-native-app <Project_Name>
        -> cd <Project_Name>
        -> npm start

  (ii) npm i react react-dom react-native-web --save

  Note : (a) React Native’s packager compiles our ECMAScript 6 code to something that a phone’s JavaScript engine can understand, but it won’t
             help us in the browser. If we tried to run our app in a web browser right now, it would quickly fail due to syntax errors.

        (b) To solve this problem, we will use Babel and webpack. Babel will compile our ECMAScript 6 code into browser-compatible ECMAScript 5, 
            and webpack will bundle the compiled JavaScript, as well as just generally make development faster. 

  (iii) npm i webpack babel-loader babel-preset-react babel-preset-es2015 --save

  (iv) npm i webpack-dev-server --save-dev


  Note:   (a) Here, babel-loader and webpack-dev-server will be used to bundle and serve our JavaScript,
              while babel-preset-react and babel-preset-es2015 tell Babel which plugins we need to compile our code.

** Configuring WEBPACK.CONFIG.JS :-

     -> First, we’ll make a webpack config file.
   
     -> This file tells webpack how to build, bundle and serve our compiled code. 

     -> In addition, we are going to use the alias property to automatically replace imports on react-native with react-native-web.

     -> This file should be placed in our project’s root.


      ==>    const webpack = require('webpack');

             module.exports = {
             entry: {
               main: './index.web.js',
             },
            module: {
              loaders: [
                {
                  test: /\.js?$/,
                  exclude: /node_modules/,
                  loader: 'babel-loader',
                  query: {
                  presets: ['es2015', 'react'],
                  },
                },
               ],
             },
           resolve: {
            alias: {
             'react-native': 'react-native-web',
            },
          },
        };

** Creating INDEX.HTML :-

    -> Now, we need to create an HTML file for our app to run in.


==> <!DOCTYPE html>
    <html>
     <head>
     <title>React Native Web</title>
     <meta charSet="utf-8" />
     <meta content="initial-scale=1,width=device-width" name="viewport" />
    </head>
    <body>
     <div id="react-app"></div>
      <script type="text/javascript" src="/bundle.js"></script>
    </body>
   </html>


** Creating INDEX.WEB.JS :- 

    -> Finally, we must make an index JavaScript file for the web.

    -> The contents of this file can be the same as index.ios.js or index.android.js, but with one additional line to attach to the DOM.

    -> The div with the ID react-app from our HTML file must be selected and then used in the call to AppRegister.runApplication.

==>  code:

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactNativeWeb extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.web.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });


** Running the application :

  --> ./node_modules/.bin/webpack-dev-server  ==> hit this command and you will find your application running



** Reference urls :

 important !! (i) https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/    

              (ii) https://github.com/necolas/react-native-web

              (iii) https://necolas.github.io/react-native-web/storybook/?selectedKind=Components&selectedStory=Button&full=0&down=0&left=1&panelRight=0

               (iv) https://facebook.github.io/react-native/docs/getting-started.html

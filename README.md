# plot-framework
JS framework for browser text adventure.

##### basic philosophy
So basically, everything is a dialogue box. A dialogue box compose of a:
* title
* text
* button

An button is a block of its own, compose of a: 
* text
* onClick: which is a function to execute upon clicking


###### The only important thing
If you're not interested in the underlying code, there's only 1 file you should care about. That is the **js/plot.js** which contains all the dialogue boxes.

I divide it into block, so it looks something like this:
```
plot = {
  block1: {
    dialogue:{
      id: default=null
      divClass: default=dialogue
      title: <string>
      text: <string>
    },
    button:{
      text: default="next"
    }
  },
  
  block2...
  block3...
}
```

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

//trying to figure out a function to change picture
//document.getElementById("picture").src="urltoimage.png";
  


let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


 

const textNodes = [
  {
    id: 1,
    text: 'You decide to take your first Jiu Jitsu class, what do you wear?',
    options: [
      {
        text: 'Gi',
        setState: { gi: true },
        nextText: 2
      },
      {
        text: 'Workout clothes',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    
    text: 'Your instructor is impressed that you brought your own gi. You had a great time and after class one of the blue belts say that you have natural skill and you should compete in next weeks tournament.' ,
    options: [
      {
        text: 'Say yes',
        requiredState: (currentState) => currentState.gi,
        nextText: 4
      },
      {
        text: 'Tell him you think that you need more time to train',
        requiredState: (currentState) => currentState.gi,
        nextText: 5
      },
    
    ]
  },
  {
    id: 3,
    text: 'Your instructor was not pleased that he had to help you find and size a gi. Besides that you had a great time at class and one of the blue belts say that you have natural skill and should compete at the tournament next week',
    options: [
      {
        text: 'say yes',
        nextText: 4
      },
      {
        text: 'Tell him you think that you need more time to train',
        nextText: 5
      },
     
    ]
  },
  {
    id: 4,
    text: 'it\'s tournament day and your match is about to start. Your opponent is a muscular guy with facial hair, do you shake his hand?',
    options: [
      {
        text: 'Shake his hand',
        nextText: 6
        
      },
      {
        text: 'Don\'t shake his hand',
        nextText: 7
      },
    ]
  },
  {
    id: 5,
    text: 'You feel good about your decision and it\'s probably for the best that you didn\'t jump straight in to a tournament. You have now been training for 3 months and feel ready for a tournament.',
    options: [
      {
        text: 'Let\'s do this !',
        nextText: 4
      }
    ]
  },
  {
    id: 6,
    text: 'Your opponent refuses to shake your hand and honestly looks like he\'s about to break you. The round starts do you go for the takedown or pull guard?',
    options: [
      {
        text: 'Go for the takedown',
        nextText: 8
      },
      {
          text:'Pull guard',
          nextText: 9
      }
    ]
  },
  {
    id: 7,
    text: 'You refuse to shake the opponents hand and that seems to anger him. The round starts and he immediately takes you down. You are in full guard, what do you do ?',
    options: [
      {
        text: 'Go for the spinning arm lock',
        nextText: 10
      },
      {
        text: 'Wait it out',
        nextText: 11
      },
     
    ]
  },
  {
    id: 8,
    text: 'Your takedown attempt was succesful, you seem to have caught him off guard. You end up in his guard, do you. ',
    options: [
      {
        text: 'Try to pass his guard',
        nextText: 12
      },
      {
          text: 'Catch your breath and react to him',
          nextText: 13
      }
    ]
  },
  {
    id: 9,
    text: 'You succesfully pull guard. What do you do next?',
    options: [
      {
        text: 'Go for a spinning arm lock',
        nextText: 10
      },
      {
          text:'Throw up a triangle choke',
          nextText: 14
      }
    ]
  },
  {
    id: 10,
    text: 'You go for a spinning arm lock and it\'s tight ! Your opponent wasn\'t expecting that and you have won your first Jiu Jitsu match ! Everyone including your coach is super proud of you. ',
    options: [
      {
        text: 'Get ready for the next tournament',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You waited it out and your opponent passed your guard, moved to side control and sinked in a head and arm choke. It seems your chances of winning this match are over.',
    options: [
      {
        text: 'Tap out',
        nextText: -1
      }
    ]
  },
  {
      id:12,
      text:'You passed his guard, moved to side control and sunk in the head and arm choke ! Everyone including your coach is very proud of you ! Congratulations on winning your first Jiu Jitsu tournament.',
        options:[
          {
            text:'Start training for the next one',
            nextText: -1
          }
          
          
      ]
  },

  {
      id:13,
      text:'Your opponent throws up a triangle choke while you were trying to catch your breath and it\'s deep. You have lost your first Jiu Jitsu match.',
      options:[
          {
              text:'Tap out',
              nextText: -1
          }
      ]
  },
        {
            id:14,
            text: 'You throw up the triangle choke and it is deep ! Your opponent decides not to tap and goes to sleep. Congratulations, you just won your first Jiu Jitsu tournament ! Everyone including your coach is very proud of you !',
            options:[
                {
                    text:'Train for the next one',
                    nextText: -1
                }
            ]
        }
  
]

startGame()
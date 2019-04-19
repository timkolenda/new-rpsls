(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,a,t){"use strict";t.r(a);t(81);var r=t(0),n=t.n(r),s=t(32),i=t.n(s),c=t(15),o=t(4),l=t(5),m=t(7),u=t(6),d=t(8),p=t(168),h=t(167),y=t(169),g=t(74),C=t.n(g),v=t(166),f=function(e){var a=e.destination,t=e.message,r=e.action,s=void 0===r?null:r,i=e.customClass;return n.a.createElement("div",{className:"linkButton ".concat(i)},n.a.createElement(v.a,{className:"button__target",to:a,onClick:s},t||a))},E=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){t.props.playerNameReady?(t.props.handleNewPlayerFormSubmit(e),t.props.history.push("/game")):t.displayInvalidPlayerNameMessage()},t.handleClick=function(){t.props.playerNameReady?t.props.addNewPlayerToFirebase():t.displayInvalidPlayerNameMessage()},t.displayInvalidPlayerNameMessage=function(){C()("Oops!","Looks like you need to enter a valid Nick Name!","error")},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"login"},n.a.createElement("h1",null,"RPSLS"),n.a.createElement("form",{className:"playerNameSubmissionForm",action:"#",onSubmit:this.handleSubmit},n.a.createElement("label",{className:"visuallyhidden",htmlFor:"playerName"},"Please enter your nickname!"),n.a.createElement("input",{className:"playerNameSubmissionForm__input",type:"text",id:"playerName",value:this.props.playerName,onChange:function(a){return e.props.handleChange(a,e.props.checkForPlayerNameReady)},placeholder:"Enter a Nickname"})),n.a.createElement("div",{className:"loginPageButtons"},n.a.createElement("div",{className:"loginPageButtons__buttonContainer",onClick:this.handleClick},n.a.createElement(f,{destination:this.props.playerNameReady?"game":"/",message:"Play Game"})),n.a.createElement("div",{className:"loginPageButtons__buttonContainer"},n.a.createElement(f,{destination:"instructions"})),n.a.createElement("div",{className:"loginPageButtons__buttonContainer"},n.a.createElement(f,{destination:"leaderboard"}))))}}]),a}(r.Component),b=Object(y.a)(E),N=t(56),k=t.n(N),w=t(77),_=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={squareDimension:0},t.handleClick=function(){t.props.getPlayerChoice(t.props.type),t.props.disableButtonDuringAnimation()},t.updateDimensions=function(){var e=window.innerWidth/4;t.setState({squareDimension:e})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e={width:this.state.squareDimension,height:this.state.squareDimension},a=!1;return a=!!this.props.tempDisabled||!this.props.playerCards[this.props.type],n.a.createElement("button",{className:"playerOptionItem",onClick:this.handleClick,style:window.innerWidth<750?e:null,disabled:a},n.a.createElement("div",null,n.a.createElement("img",{src:this.props.image,alt:this.props.alt,className:this.props.customClass})))}}]),a}(r.Component),O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={tempDisabled:!1},t.disableButtonDuringAnimation=function(){t.setState({tempDisabled:!0}),setTimeout(function(e){t.setState({tempDisabled:!1})},3500)},t.renderPlayerOptions=function(){return t.props.options.map(function(e){return n.a.createElement(_,{key:e.index,image:e.img,alt:e.alt,type:e.type,getPlayerChoice:t.props.getPlayerChoice,showCard:t.props.showCard,customClass:e.customClass,playerCards:t.props.playerCards,disableButtonDuringAnimation:t.disableButtonDuringAnimation,tempDisabled:t.state.tempDisabled})})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"playerOptionList"},this.renderPlayerOptions())}}]),a}(r.Component),D=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={squareDimension:0},t.updateDimensions=function(){var e=window.innerWidth/1.55;t.setState({squareDimension:e})},t.renderVictoryMessage=function(){return n.a.createElement("div",{className:"card__victoryMessage"},t.props.winStatement)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e={width:this.state.squareDimension,height:this.state.squareDimension};return n.a.createElement("div",{className:"card",style:window.innerWidth<750?e:null},n.a.createElement("div",{className:"card__cardFlipper ".concat(this.props.flipped?"card__cardFlipper--active":""),style:window.innerWidth<750?e:null},n.a.createElement("div",{className:"card__display card__display--back",style:window.innerWidth<750?e:null},n.a.createElement("img",{src:"../../assets/background.png",alt:"image for the back of the card"})),n.a.createElement("div",{className:"card__display card__display--front",style:window.innerWidth<750?e:null},n.a.createElement("img",{src:this.props.image,alt:"played card image"}),this.renderVictoryMessage())))}}]),a}(r.Component),S=function(e){var a=e.playerCardFlipped,t=e.compCardFlipped,r=e.playerCardImage,s=e.compCardImage,i=e.playerChoice,c=e.compChoice,o=e.roundResult,l=function(){var e=[];return e.push(i,c),e.includes("rock")&&e.includes("paper")?"Paper covers rock":e.includes("rock")&&e.includes("scissors")?"Rock smashes scissors":e.includes("rock")&&e.includes("lizard")?"Rock crushes lizard":e.includes("rock")&&e.includes("spock")?"Spock vaporizes rock":e.includes("paper")&&e.includes("scissors")?"Scissors cut paper":e.includes("paper")&&e.includes("lizard")?"Lizard eats paper":e.includes("paper")&&e.includes("spock")?"Paper disproves spock":e.includes("scissors")&&e.includes("lizard")?"Scissors decapitate lizard":e.includes("scissors")&&e.includes("spock")?"Spock smashes scissors":e.includes("lizard")&&e.includes("spock")?"Lizard bites spock":void 0};return n.a.createElement("div",{className:"cardDisplay"},n.a.createElement(D,{flipped:a,image:r,winStatement:"Win"===o?l():null}),n.a.createElement(D,{flipped:t,image:s,winStatement:"Lose"===o?l():null}))},j=Object(y.a)(function(e){var a=e.resetGame,t=e.playerWinCount,r=void 0===t?0:t,s=e.compWinCount,i=void 0===s?0:s,c=e.tieCount,o=void 0===c?0:c,l=e.playerName,m=e.history;return l||m.push("/"),n.a.createElement("div",{className:"results"},n.a.createElement("table",{className:"ui celled large table padded unstackable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2",className:"center aligned"},l))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Games Won"),n.a.createElement("td",{className:"center aligned"},r)),n.a.createElement("tr",null,n.a.createElement("td",null,"Games Lost"),n.a.createElement("td",{className:"center aligned"},i)),n.a.createElement("tr",null,n.a.createElement("td",null,"Games Tied"),n.a.createElement("td",{className:"center aligned"},o)))),n.a.createElement(f,{destination:"/",message:"New Game",action:a}),n.a.createElement(f,{destination:"/leaderboard",message:"Leaderboard"}))}),R=[{type:"rock",img:"assets/rock.png",alt:"Image of a hand in a fist, indicating rock!",index:0,customClass:"rockClass"},{type:"paper",img:"assets/paper.png",alt:"Image of a flat hand, indicating paper!",index:1,customClass:"paperClass"},{type:"scissors",img:"assets/scissors.png",alt:"Image of a hand with two fingers out, indicating scissors!",index:2,customClass:"scissorsClass"},{type:"lizard",img:"assets/lizard.png",alt:"Image of a hand forming a mouth, indicating lizard!",index:3,customClass:"lizardClass"},{type:"spock",img:"assets/spock.png",alt:"Image of a hand giving the Vulcan salute, indicating spock!",index:4,customClass:"spockClass"}],W=function(e){var a=e.compCardsArray,t=e.playerCards,r=e.playerWinCount,s=e.compWinCount,i=e.tieCount,c=function(e){return R.map(function(a){return n.a.createElement("div",{className:"listItem",key:a.type},n.a.createElement("div",{className:"listItem__image"},n.a.createElement("img",{src:a.img,alt:a.alt})),n.a.createElement("div",{className:"listItem__counter"},function(e,a){return R.map(function(t,r){return n.a.createElement("div",{key:r,className:"bubble ".concat(e[a]>=r+1?"filled ":"")})})}(e,a.type)))})};return n.a.createElement("div",{className:"cardTracker"},n.a.createElement("div",{className:"counterList"},c(t)),n.a.createElement("div",{className:"counterList"},c(function(){var e={};return a.map(function(a){var t=Object.entries(a);e[t[0][0]]=t[0][1]}),e}())),n.a.createElement("div",{className:"score"},n.a.createElement("div",{className:"score__row"},n.a.createElement("div",{className:"score__cell score__cell--heading"},"Wins"),n.a.createElement("div",{className:"score__cell"},r)),n.a.createElement("div",{className:"score__row"},n.a.createElement("div",{className:"score__cell score__cell--heading"},"Loses"),n.a.createElement("div",{className:"score__cell"},s)),n.a.createElement("div",{className:"score__row"},n.a.createElement("div",{className:"score__cell score__cell--heading"},"Ties"),n.a.createElement("div",{className:"score__cell"},i))))},A=t(57),F=t.n(A);F.a.initializeApp({apiKey:"AIzaSyCr6cQFXFwCYl7-ClBTIAK6H6MhS6XNkC8",authDomain:"new-rpsls.firebaseapp.com",databaseURL:"https://new-rpsls.firebaseio.com",projectId:"new-rpsls",storageBucket:"new-rpsls.appspot.com",messagingSenderId:"783810961248"});var P=F.a,I=t(78),G=t.n(I).a.create({baseURL:"https://api.unsplash.com/",headers:{Authorization:"Client-ID 630c588d9c659156e3aeb6db866809578dadb2520e92e3eaaa7d6c58a069053a"}}),L=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={options:R,playerCardFlipped:!1,compCardFlipped:!1,playerChoice:"",compChoice:"",compChoiceNumber:"",compChoiceArray:[{rock:5},{paper:5},{scissors:5},{lizard:5},{spock:5}],playerCards:{rock:5,paper:5,scissors:5,lizard:5,spock:5},cardImage:"",playerCardImage:"",compCardImage:"",playerWinCount:0,compWinCount:0,tieCount:0,roundResult:"",totalRounds:0},t.getCardImage=function(){var e=Object(w.a)(k.a.mark(function e(a,r){var n,s,i;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"spock"===a&&(a="space"),e.next=3,G.get("search/photos",{params:{query:a}});case 3:n=e.sent,s=Math.floor(Math.random()*n.data.results.length),i=n.data.results[s].urls.regular,t.setState(Object(c.a)({},"".concat(r,"CardImage"),i),function(){return t.showCard("".concat(r))});case 7:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t.showCard=function(e){return t.setState(Object(c.a)({},"".concat(e,"CardFlipped"),!0))},t.getPlayerChoice=function(e){return t.setState({playerChoice:e},function(){t.getCardImage(t.state.playerChoice,"player"),t.spendPlayerCard(),t.getCompChoice()})},t.getCompChoice=function(){setTimeout(function(){var e=Math.floor(Math.random()*t.state.compChoiceArray.length),a=Object.keys(t.state.compChoiceArray[e])[0];t.setState({compChoice:a,compChoiceNumber:e},function(){t.resolveSetCompChoice()})},1e3)},t.resolveSetCompChoice=function(){t.spendCompCard(),t.getCardImage(t.state.compChoice,"comp")},t.spendPlayerCard=function(){var e=t.state.playerCards;e[t.state.playerChoice]=e[t.state.playerChoice]-1,t.setState({playerCards:e})},t.spendCompCard=function(){var e=t.state.compChoiceArray;e[t.state.compChoiceNumber][t.state.compChoice]--;var a=e[t.state.compChoiceNumber][t.state.compChoice];t.setState({compChoiceArray:e},function(){return t.caluculateResult(t.state.playerChoice,t.state.compChoice)}),0===a&&t.clearEmptyCardSlot()},t.clearEmptyCardSlot=function(){var e=t.state.compChoiceArray;e.splice(t.state.compChoiceNumber,1),t.setState({compchoiceArray:e})},t.caluculateResult=function(e,a){e&&a&&("rock"===e&&"scissors"===a||"rock"===e&&"lizard"===a||"paper"===e&&"rock"===a||"paper"===e&&"spock"===a||"scissors"===e&&"paper"===a||"scissors"===e&&"lizard"===a||"spock"===e&&"rock"===a||"spock"===e&&"scissors"===a||"lizard"===e&&"paper"===a||"lizard"===e&&"spock"===a?(t.props.updateCount("win"),t.setState({playerWinCount:t.state.playerWinCount+1,roundResult:"Win"},function(){return t.resolveRound("Win")})):t.state.playerChoice===t.state.compChoice?(t.props.updateCount("tie"),t.setState({tieCount:t.state.tieCount+1,roundResult:"Tie"},function(){return t.resolveRound("Tie")})):(t.props.updateCount("lose"),t.setState({compWinCount:t.state.compWinCount+1,roundResult:"Lose"},function(){return t.resolveRound("Lose")})))},t.resolveRound=function(e){setTimeout(function(e){t.getTotalRounds(),t.resetForNextRound()},2e3)},t.getTotalRounds=function(){var e=t.state.compWinCount+t.state.playerWinCount+t.state.tieCount;t.setState({totalRounds:e})},t.saveCurrentGameData=function(){var e={compChoiceArray:t.state.compChoiceArray,playerCards:t.state.playerCards};P.database().ref().child(t.props.id).child("recoveryData").set(e).then(function(e){t.props.setRecoveryDataState()})},t.recoverCurrentGameData=function(){P.database().ref().child(t.props.id).child("recoveryData").once("value").then(function(e){var a=e.toJSON();t.restoreCurrentGame(a)})},t.restoreCurrentGame=function(e){var a=[];for(var r in e.compChoiceArray)a.push(e.compChoiceArray[r]);t.setState({compChoiceArray:a,playerCards:e.playerCards,playerWinCount:t.props.win,compWinCount:t.props.lose,tieCount:t.props.tie})},t.triggerEndGame=function(e){25===e&&t.props.history.push("/results")},t.resetForNextRound=function(){t.saveCurrentGameData(),t.setState({playerCardFlipped:!1,compCardFlipped:!1,playerChoice:"",compChoice:"",compChoiceNumber:"",roundResult:""},function(){return t.triggerEndGame(t.state.totalRounds)})},t.renderAdmin=function(){return n.a.createElement("div",{className:"adminArea"},n.a.createElement(W,{playerCards:t.state.playerCards,compCardsArray:t.state.compChoiceArray,playerWinCount:t.state.playerWinCount,compWinCount:t.state.compWinCount,tieCount:t.state.tieCount}),n.a.createElement(f,{destination:"menu",action:t.saveCurrentGameData,message:n.a.createElement("i",{className:"fas fa-bars"}),customClass:"menu"}))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.recoveryDataExists&&this.recoverCurrentGameData(),this.props.playerName||this.props.history.push("/")}},{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game__cardArea"},n.a.createElement(O,{options:R,getPlayerChoice:this.getPlayerChoice,playerCards:this.state.playerCards}),n.a.createElement("div",{className:"cardDisplayContainer"},n.a.createElement(S,{options:R,playerCardFlipped:this.state.playerCardFlipped,compCardFlipped:this.state.compCardFlipped,playerChoice:this.state.playerChoice,compChoice:this.state.compChoice,playerCardImage:this.state.playerCardImage,compCardImage:this.state.compCardImage,roundResult:this.state.roundResult}),window.innerWidth<750?null:this.renderAdmin())),window.innerWidth<750?this.renderAdmin():null)}}]),a}(r.Component),x=Object(y.a)(L),z=function(e){return i.a.createPortal(n.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},n.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},n.a.createElement("div",{className:"ui huge header"},e.title),n.a.createElement("div",{className:"content maxedHeight"},e.content),n.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},T=t(26),B=Object(T.a)(),M=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={instruction:void 0,rulesDisplayed:!1},t.handleClick=function(e){document.querySelectorAll(".interactiveOverlay__trigger").forEach(function(e){return e.classList.remove("active")}),e.target.classList.add("active"),t.setState({instruction:e.target.dataset.instruction})},t.toggleContent=function(){t.setState({rulesDisplayed:!t.state.rulesDisplayed})},t.renderActions=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:t.toggleContent,className:"ui button primary massive"},t.state.rulesDisplayed?"Show Gameboard":"Show Rules"),n.a.createElement("button",{onClick:function(){return B.goBack()},className:"ui button primary massive"},"Back"))},t.showRules=function(){return n.a.createElement("div",{className:"ruleContent"},n.a.createElement("div",{className:"ruleImage"},n.a.createElement("img",{src:"../../assets/rules.png",alt:"Image showing the rules for RPSLS"})))},t.renderMessage=function(){switch(t.state.instruction){case"options":return n.a.createElement("div",{className:"ui green message large"},"Begin each round by choosing which card your are going to play.");case"userCard":return n.a.createElement("div",{className:"ui green message large"},"Cards you play will be displayed here.");case"compCard":return n.a.createElement("div",{className:"ui green message large"},"Cards the computer plays will be displayed here.");case"cardTracker":return n.a.createElement("div",{className:"ui green message large"},"Keep track of the remaining cards in your deck and your opponents deck using this tracker.");case"scoreTracker":return n.a.createElement("div",{className:"ui green message large"},"Track your current score here.");case"menu":return n.a.createElement("div",{className:"ui green message large"},"Navigate to the menu for more actions.");default:return}},t.showGameBoard=function(){return n.a.createElement("div",{className:"instructionContent"},n.a.createElement("div",{className:"ui big message large"},"Interact with the game for more information."),n.a.createElement("div",{className:"instructions"},n.a.createElement("div",{className:"gameDisplay"},n.a.createElement("img",{src:"../assets/game-display-desktop.png",alt:"Image of gameboard."}),n.a.createElement("div",{className:"interactiveOverlay"},n.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--options","data-instruction":"options"}),n.a.createElement("div",{className:"interactiveOverlay__container"},n.a.createElement("div",{className:"interactiveOverlay__cardDisplay"},n.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--userCard","data-instruction":"userCard"}),n.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--compCard","data-instruction":"compCard"})),n.a.createElement("div",{className:"interactiveOverlay__adminArea"},n.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--cardTracker","data-instruction":"cardTracker"}),n.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--scoreTracker","data-instruction":"scoreTracker"}),n.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--menu","data-instruction":"menu"})))))),t.renderMessage())},t.renderContent=function(){return t.state.rulesDisplayed?t.showRules():t.showGameBoard()},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(z,{title:"Instructions",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return B.goBack()}})}}]),a}(r.Component),q=P.database().ref(),H=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={players:[]},t.pullDataFromFirebase=function(){q.once("value").then(function(e){var a=Object.values(e.toJSON());t.sortPlayerList(a)})},t.sortPlayerList=function(e){var a=e.sort(function(e,a){return e.win<a.win?1:e.win>a.win?-1:e.win===a.win&&e.lose>a.lose?1:e.win===a.win&&e.lose<a.lose?-1:void 0});t.setState({players:a})},t.renderRankings=function(){return t.state.players.map(function(e,a){if(e.win+e.lose+e.tie===25)return n.a.createElement("tr",{key:a},n.a.createElement("td",{"data-label":"Rank"},a+1),n.a.createElement("td",{"data-label":"Name"},e.name),n.a.createElement("td",{"data-label":"Wins"},e.win),n.a.createElement("td",{"data-label":"Loses"},e.lose))})},t.renderContent=function(){return n.a.createElement("div",{className:"leaderboard"},n.a.createElement("table",{className:"ui celled large table unstackable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"rankColumn"},"Rank"),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Wins"),n.a.createElement("th",null,"Loses"))),n.a.createElement("tbody",{className:"rankList"},t.renderRankings())))},t.renderActions=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:function(){return B.goBack()},className:"ui button primary massive"},"Back"))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.pullDataFromFirebase()}},{key:"render",value:function(){return n.a.createElement(z,{title:"Leaderboard",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return B.goBack()}})}}]),a}(r.Component),J=function(e){e.recoverCurrentGameData;var a=e.resetGame;return n.a.createElement(z,{title:"Menu",content:n.a.createElement("div",{className:"menu"},n.a.createElement("div",{className:"menuOptions"},n.a.createElement(f,{destination:"/",message:"New Game",action:a}),n.a.createElement(f,{destination:"/instructions",message:"Instructions"}),n.a.createElement(f,{destination:"/leaderboard",message:"Leaderboard"}))),actions:n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{to:"/game",className:"ui button primary massive"},"Back")),onDismiss:function(){return B.goBack()}})},K=t(79),V=t.n(K),U=P.database().ref(),X=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={playerName:"",playerNameReady:!1,tie:0,win:0,lose:0,id:"",windowWidth:0,windowHeight:0,recoveryDataExists:!1},t.updateWindow=function(){t.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},t.handleChange=function(e,a){t.setState(Object(c.a)({},e.target.id,e.target.value),function(){return a()})},t.checkForPlayerNameReady=function(){"Enter a nickname"!==t.state.playerName&&""!==t.state.playerName&&" "!==t.state.playerName&&"  "!==t.state.playerName&&"   "!==t.state.playerName?t.setState({playerNameReady:!0}):t.setState({playerNameReady:!1})},t.handleNewPlayerFormSubmit=function(e){e.preventDefault(),t.addNewPlayerToFirebase()},t.addNewPlayerToFirebase=function(){var e={name:t.state.playerName,win:t.state.win,lose:t.state.lose,tie:t.state.tie};U.push(e).then(function(e){t.setState({id:e.key})})},t.updateFirebase=function(e){U.child(t.state.id).child(e).set(t.state[e])},t.updateCount=function(e){t.setState(Object(c.a)({},e,t.state[e]+1),function(){return t.updateFirebase(e)})},t.setRecoveryDataState=function(){t.setState({recoveryDataExists:!0})},t.resetGame=function(){t.setState({playerName:"",playerNameReady:!1,tie:0,win:0,lose:0,id:"",recoveryDataExists:""})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateWindow(),window.addEventListener("resize",this.updateWindow)}},{key:"render",value:function(){var e,a=this,t={backgroundImage:"linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)), url(".concat(V.a,")")};return n.a.createElement(p.a,null,n.a.createElement("div",{className:"app",style:t},n.a.createElement("div",{className:"appWrapper"},n.a.createElement(h.a,(e={exact:!0,path:"/"},Object(c.a)(e,"exact",!0),Object(c.a)(e,"render",function(e){return n.a.createElement(b,{history:B,playerName:a.state.playerName,playerNameReady:a.state.playerNameReady,handleChange:a.handleChange,handleNewPlayerFormSubmit:a.handleNewPlayerFormSubmit,addNewPlayerToFirebase:a.addNewPlayerToFirebase,checkForPlayerNameReady:a.checkForPlayerNameReady})}),e)),n.a.createElement(h.a,{path:"/game",exact:!0,render:function(e){return n.a.createElement(x,{history:B,playerName:a.state.playerName,updateCount:a.updateCount,windowWidth:a.state.windowWidth,windowHeight:a.state.windowHeight,id:a.state.id,setRecoveryDataState:a.setRecoveryDataState,tie:a.state.tie,win:a.state.win,lose:a.state.lose,recoveryDataExists:a.state.recoveryDataExists})}}),n.a.createElement(h.a,{path:"/menu",exact:!0,render:function(e){return n.a.createElement(J,{recoverCurrentGameData:a.recoverCurrentGameData,resetGame:a.resetGame})}}),n.a.createElement(h.a,{path:"/instructions",exact:!0,render:function(e){return n.a.createElement(M,null)}}),n.a.createElement(h.a,{path:"/leaderboard",exact:!0,render:function(e){return n.a.createElement(H,null)}}),n.a.createElement(h.a,{path:"/results",exact:!0,render:function(e){return n.a.createElement(j,{resetGame:a.resetGame,tieCount:a.state.tie,playerWinCount:a.state.win,compWinCount:a.state.lose,playerName:a.state.playerName,history:B})}}))))}}]),a}(r.Component);i.a.render(n.a.createElement(X,null),document.querySelector("#root"))},79:function(e,a,t){e.exports=t.p+"static/media/background.ce8f19bd.png"},80:function(e,a,t){e.exports=t(164)},81:function(e,a,t){}},[[80,2,1]]]);
//# sourceMappingURL=main.10fdffee.chunk.js.map
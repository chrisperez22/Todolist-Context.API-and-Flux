const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white",
		  },
		],
		globalList: [],
		inputValue: "",
	  },
	  actions: {
		// Use getActions to call a function within a function
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
		  /**
					  fetch().then().then(data => setStore({ "foo": data.bar }))
				  */
		},
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ demo: demo });
		},
		updateTaskToEnter: (newTask) => {
		  //get the store
		  const store = getStore();
  
		  //update the store value
		  setStore({ inputValue: newTask });
		},
		keyPress(e) {
		  if (e.keyCode === 13) {
			this.addTodo();
		  }
		},
		addTodo() {
		  //get the store
		  const store = getStore();
  
		  const newArray = store.globalList.concat(store.inputValue);
  
		  setStore({ globalList: newArray });
  
		  this.updateTaskToEnter("");
		},
		handleRemove(id) {
		  //get the store
		  const store = getStore();
  
		  store.globalList.splice(id, 1);
  
		  setStore({ globalList: store.globalList });
  
		  alert("Delete was successful");
		},
	  },
	};
  };
  
  export default getState;
  
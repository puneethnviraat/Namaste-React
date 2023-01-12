
    const heading1= React.createElement('h1',{ id:"rddoot", style:{color:"red"}}, "this is for testing.11.")
    const heading2= React.createElement('h3',{ id:"rddeot", style:{color:"green"}}, "this is for testing..22")
    const container= React.createElement('div',{class:"container"}, [heading1,heading2])


    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(container);

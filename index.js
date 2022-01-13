function App(){
    const Buttons = [
    {
        class: '0',
        value: 0,
        keyCode: '48',
        text: '0',
        id: 'zero'
    },
    {
        class: '1',
        value: 1,
        keyCode: '49',
        text: '1',
        id: 'one'
    },
    {
        class: '2',
        value: 2,
        keyCode: '50',
        text: '2',
        id: 'two'
    },
    {
        class: '3',
        value: 3,
        keyCode: '51',
        text: '3',
        id: 'three'
    },
    {
        class: '4',
        value: 4,
        keyCode: '52',
        text: '4',
        id: 'four'
    },
    {
        class: '5',
        value: 5,
        keyCode: '53',
        text: '5',
        id: 'five'
    },
    {
        class: '6',
        value: 6,
        keyCode: '54',
        text: '6',
        id: 'six'
    },
    {
        class: '7',
        value: 7,
        keyCode: '55',
        text: '7',
        id: 'seven'
    },
    {
        class: '8',
        value: 8,
        keyCode: '56',
        text: '8',
        id: 'eight'
    },
    {
        class: '9',
        value: 9,
        keyCode: '57',
        text: '9',
        id: 'nine'
    },
    {
        class: 'subtract',
        value: ' - ',
        keyCode: '173',
        text: '-',
        id: 'subtract'
    },
    {
        class: 'add',
        value: ' + ',
        keyCode: '65',
        text: '+',
        id: 'add'
    },
    {
        class: 'multiply',
        value: ' * ',
        keyCode: '77',
        text: '*',
        id: 'multiply'
    },
    {
        class: 'divide',
        value: ' / ',
        keyCode: '191',
        text: '/',
        id: 'divide'
    },
    {
        class: 'equal',
        value: ' = ',
        keyCode: '61',
        text: '=',
        id: 'equals'
    },
    {
        class: 'decimal',
        value: '.',
        keyCode: '190',
        text: '.',
        id: 'decimal'
    },
    {
        class: 'clear',
        value: '',
        keyCode: '67',
        text: 'C',
        id: 'clear'
    },
    ]
    const [Input, setInput] = React.useState(' ');
    const [Output, setOutput] = React.useState('0');
    const [decimal, setDecimal] = React.useState(false);
    const [clear, setClear] = React.useState(false);
    const [tempy, setTemp] = React.useState(false);

    return (
    <div className='everything'>
        <div className='container'>
            <div className='Input' id='displayInput'>{Input}</div>
            <div className='Output' id='display'>{Output}</div>
            {Buttons.map((button) =>(
               <Button buttonWow = {button} setDecimal={setDecimal} decimal={decimal}setOutput={setOutput} setInput={setInput} Input = {Input} Output = {Output} clear={clear} setClear={setClear} tempy={tempy} setTemp={setTemp}/> 
            ))}
        </div>
    </div>
    );
}

function Button({ buttonWow , setOutput, setInput, Input, Output, setDecimal, decimal, clear, setClear, tempy, setTemp}) {
    React.useEffect(() => {
        document.addEventListener('keydown',handleKeyPress);
        return() => {
            document.addEventListener('keydown',handleKeyPress);
        }
    }, []);

    const handleKeyPress = (e) => {
        if(e.keyCode == buttonWow.keyCode) {
            runItYuh();
        }
    }
    const runItYuh = () => {
        console.log(buttonWow.value);
        console.log(tempy);
        console.log(Output);
        if((buttonWow.value == ' + ' ||
           buttonWow.value == ' - ' ||
           buttonWow.value == ' * ' ||
           buttonWow.value == ' / ') && tempy){
            clear = false;
            setClear(false);
            setDecimal(false);
            Input = '' + Output;
            setInput(Input);
            setTemp(false);
            tempy = false;
        } 
        if(buttonWow.value === '' || clear){
            setClear(false);
            setDecimal(false);
            setInput('  ');
            Input = '  ';
            console.log('clear output');
            setOutput('0');
            console.log('clear input');
        }
        for(var x = 0; x<10; x++){
            if(buttonWow.value === x){
                console.log('number');
                if(x == 0 && (parseInt(Input.charAt(Input.length-1)) !== 0 || Input.charAt(Input.length-2) !== ' ')){
                setInput(Input + x);
                setOutput(Input + x);
                } else if(x !== 0){
                setInput(Input + x);
                setOutput(Input + x);
                }
            } else if(parseInt(Input.charAt(Input.length-1)) === x){
                if(buttonWow.value == ' - '){
                    console.log('subtract');
                    setInput(Input + buttonWow.value);
                    setOutput(Input + buttonWow.value);
                    setDecimal(false);
                } else if(buttonWow.value == ' + '){
                    console.log('add');
                    setInput(Input + buttonWow.value);
                    setOutput(Input + buttonWow.value);
                    setDecimal(false);
                } else if(buttonWow.value == ' / '){
                    console.log('divide');
                    setInput(Input + buttonWow.value);
                    setOutput(Input + buttonWow.value);
                    setDecimal(false);
                } else if(buttonWow.value == ' * '){
                    console.log('multiply');
                    setInput(Input + buttonWow.value);
                    setOutput(Input + buttonWow.value);
                    setDecimal(false);
                }
            } else if(Input.charAt(Input.length-2) == '-' ||
                      Input.charAt(Input.length-2) == '+' ||
                      Input.charAt(Input.length-2) == '/' ||
                      Input.charAt(Input.length-2) == '*'){
                    var temp = Input.slice(0, Input.length-3);
                    if(buttonWow.value == ' - '){
                        console.log('subtract replace');
                        setInput(Input + '-');
                        setOutput(Input + '-');
                        setDecimal(false);
                    } else if(buttonWow.value == ' + '){
                        console.log('add replace');
                        setInput(temp + buttonWow.value);
                        setOutput(temp + buttonWow.value);
                        setDecimal(false);
                    } else if(buttonWow.value == ' / '){
                        console.log('divide replace');
                        setInput(temp + buttonWow.value);
                        setOutput(temp + buttonWow.value);
                        setDecimal(false);
                    } else if(buttonWow.value == ' * '){
                        console.log('multiply replace');
                        setInput(temp + buttonWow.value);
                        setOutput(temp + buttonWow.value);
                        setDecimal(false); 
                    }   
            } else if(Input.charAt(Input.length-1) == '-'){
                    var temp = Input.slice(0, Input.length-4);
                    if(buttonWow.value == ' - '){
                        console.log('subtract replace');
                        setInput(temp + ' - ');
                        setOutput(temp + ' - ');
                        setDecimal(false);
                    } else if(buttonWow.value == ' + '){
                        console.log('add replace');
                        setInput(temp + buttonWow.value);
                        setOutput(temp + buttonWow.value);
                        setDecimal(false);
                    } else if(buttonWow.value == ' / '){
                        console.log('divide replace');
                        setInput(temp + buttonWow.value);
                        setOutput(temp + buttonWow.value);
                        setDecimal(false);
                    } else if(buttonWow.value == ' * '){
                        console.log('multiply replace');
                        setInput(temp + buttonWow.value);
                        setOutput(temp + buttonWow.value);
                        setDecimal(false); 
                    }   
            }
        }
        if(buttonWow.value == '.'){
            console.log('decimal');
            if(!decimal){
                console.log('new decimal');
                setInput(Input + buttonWow.value);
                setOutput(Input + buttonWow.value);
                setDecimal(true);
            }
        } 
        else if(buttonWow.value == ' = '){
            console.log('equals');
            setInput(Input + buttonWow.value);
            setOutput(Input + buttonWow.value);
            console.log('formula about to start')
            parseFormula();
            console.log('formula finished');

        }
    }
    const parseFormula = () => {
        console.log(Input)
        var formulaArray = Input.split(' ');
        var tempArray = [];
        for(var x=0;x<formulaArray.length;x++){
            if(formulaArray[x] !== ''){
                tempArray.push(formulaArray[x]);
            }
        }
        formulaArray = tempArray;
        //formulaArray = formulaArray.slice(1,formulaArray.length);
        console.log(formulaArray);
        while(formulaArray.length > 1){
        for(var x = 1; x<formulaArray.length; x = x+2)
        {
            console.log('classic for loop action part: ' + x )
            if(formulaArray[x] == '*'){
                var temp = parseFloat(formulaArray[x-1]) * parseFloat(formulaArray[x+1]);
                if(x == 1 && x == formulaArray.length-2){
                    formulaArray = temp;
                } else if(x == 1){
                    formulaArray = [temp, ...formulaArray.slice(x+2,formulaArray.length)];
                } else if(x == formulaArray.length-2){
                    formulaArray = [...formulaArray.slice(0,x-1),temp];
                } else {
                    formulaArray = [...formulaArray.slice(0,x-1),temp,...formulaArray.slice(x+2,formulaArray.length)];
                } 
            } else if(formulaArray[x] == '/'){
                var temp = parseFloat(formulaArray[x-1]) / parseFloat(formulaArray[x+1]);
                if(x == 1 && x == formulaArray.length-2){
                    formulaArray = temp;
                } else if(x == 1){
                    formulaArray = [temp, ...formulaArray.slice(x+2,formulaArray.length)];
                } else if(x == formulaArray.length-2){
                    formulaArray = [...formulaArray.slice(0,x-1),temp];
                } else {
                    formulaArray = [...formulaArray.slice(0,x-1),temp,...formulaArray.slice(x+2,formulaArray.length)];
                } 
            }
        }
        for(var x = 1; x<formulaArray.length; x = x+2)
        {
            console.log('classic for loop action part: ' + x )
            if(formulaArray[x] == '+'){
                var temp = parseFloat(formulaArray[x-1]) + parseFloat(formulaArray[x+1]);
                if(x == 1 && x == formulaArray.length-2){
                    formulaArray = temp;
                } else if(x == 1){
                    formulaArray = [temp, ...formulaArray.slice(x+2,formulaArray.length)];
                } else if(x == formulaArray.length-2){
                    formulaArray = [...formulaArray.slice(0,x-1),temp];
                } else {
                    formulaArray = [...formulaArray.slice(0,x-1),temp,...formulaArray.slice(x+2,formulaArray.length)];
                } 
            } else if(formulaArray[x] == '-'){
                var temp = parseFloat(formulaArray[x-1]) - parseFloat(formulaArray[x+1]);
                if(x == 1 && x == formulaArray.length-2){
                    formulaArray = temp;
                } else if(x == 1){
                    formulaArray = [temp, ...formulaArray.slice(x+2,formulaArray.length)];
                } else if(x == formulaArray.length-2){
                    formulaArray = [...formulaArray.slice(0,x-1),temp];
                } else {
                    formulaArray = [...formulaArray.slice(0,x-1),temp,...formulaArray.slice(x+2,formulaArray.length)];
                } 
            }
        }
        console.log(formulaArray);
        setOutput(formulaArray);
        setClear(true);
        setTemp(true);
        }
    }
    return(
        <button className={'b'+buttonWow.class} value={buttonWow.value} onClick={runItYuh} id={buttonWow.id}>{buttonWow.text}</button>
    );
}

ReactDOM.render(<App/>,document.getElementById('app'))
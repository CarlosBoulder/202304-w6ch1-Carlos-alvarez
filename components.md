# ToDo App

## Data layer

### Data

- Collection of ToDos
  - ToDo:
    - id: number
    - name: string
    - isDone: boolean

### Modifications

- addToDo()
- removeToDo()
- updateToDo()
- loadToDos()
- toggleToDo()

## Components

### Store

#### State

- Collection of ToDos

#### ToDosReducer

- addToDo()
- removeToDo()
- updateToDo()
- loadToDos()
- toggleToDo()

### App

- Receives an external collection of ToDos
- Receives a collection of ToDos
- Receives dispatch()
- Shows the title of the app inside a heading
- Renders a ToDoForm
- Renders a ToDosList component

### ToDoForm

- State:
  - ToDo
- handleSubmit()
- Receives dispatch()
- Receives an optional ToDo to update
- Shows an input text for the name of the ToDo
- Renders a Button component
  - text: "create" / "modify"
  - actionOnClick: handleSubmit

### ToDosList

- Receives a collection of ToDos
- Renders as many ToDoCard as ToDos are in the collection

### ToDoCard

- Receives a ToDo
- Receives dispatch()
- handleClick()
- Shows the ToDo's name inside a heading
- Shows a check when the received ToDo is done
- Renders a Button with:
  - text: "delete"
  - actionOnClick: handleClick

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked

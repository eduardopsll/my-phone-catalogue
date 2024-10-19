
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script>

      class StoreFn {
        
        constructor(initialState, reducer) {
          this.state = {...initialState};
          this.subscribers = [];
        }

        
          getState () {
            return this.state
          };

          dispatch (action) {
            const state = reducer(this.state, action);
            console.log(this.subscribers)
            this.subscribers.forEach(subscriber => subscriber(state));
          }
          
          subscribe (component) {
            console.log('SUBSCRIBED', component)
            this.subscribers.push(component);
          }
          
          unsubscribe (component) {
            const index = this.subscribers.findIndex(subscriber => subscriber === component);
            
            if(index !== -1) {
              this.subscribers = this.subscribers.splice(index, 1);
            }
            
          }
      }

      const reducer = (state, action) => {
        if (action.type === "SET_NAME") {
          return {
            ...state,
            name: action.payload
          }
        }
        return state;
      }

      // store init:
      const store = new StoreFn({name: 'Test'}, reducer);

      const connect = (mapStateToProps) => (Component) => {
          return class Connected extends React.Component {
            constructor () {
              super();
              this.state = mapStateToProps(store.getState());
              console.log(this, 'COMPONENT');
            }
            
            udpateState (state) {
              this.setState(mapStateToProps(state));
              console.log('UPDATED')
            }
            
            componentDidMount() {
              console.log(this, 'THIS');
              store.subscribe(this.updateState);
              store.dispatch({type: 'SET_NAME', payload: 'World'})
            }
            
            componentWillUnmount() {
              store.unsubscribe(this.updateState)
            }
            
            render() {
              return <Component {...this.state} />
            }
          }
      }

      class HelloComponent extends React.Component {
        render () {
          return <div>Hello {this.props.name}</div>
        }
      }

      const ConnectedHello = connect((state) => ({name: state.name}))(HelloComponent);

      

      ReactDOM.render(
        <ConnectedHello />,
        document.getElementById('root')
      );
    </script>
  </body>
</html>

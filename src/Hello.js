import { connect } from 'redux-vue';

const Hello = {
    props: {
        "name": {
            type: String,
            required: true
        },
        "changeName": {
            type: Function,
            required: true
        }
    },
    created () {
        console.log('created called');
    },
    mounted () {
        console.log('mounted called');
    },
    beforeDestroy () {
        console.log('beforeDestroy called');
    },
    destroyed () {
        console.log('destroyed called');
    },
    methods: {
        handleClick() {
            console.log('button clicked');
            this.changeName('Sazzad');
        },
        handleClick1() {
            console.log('button clicked');
            this.changeName('Saddam');
        },
        handleClick2() {
            console.log('button clicked');
            this.changeName('Pollob da');
        },
        handleClick3() {
            console.log('button clicked');
            this.changeName('Nilove bhai');
        },
    },
    render(h) {
        console.log('render called');
        return (
            <div>
                <span>{`Hello world ${ this.name }`}</span>
                <button on-click={ this.handleClick }>Click me</button>
                <button on-click={ this.handleClick1 }>Click me</button>
                <button on-click={ this.handleClick2 }>Click me</button>
                <button on-click={ this.handleClick3 }>Click me</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName(name) {
            dispatch({
                type: 'CHANGE_NAME',
                name
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

import React, { Component } from 'react'

export default class ItemsFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]
    render() {
        const {filter, onButton} = this.props
        
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name
            const clazz = isActive ? 'active' : 'done'
            return (
                <button onClick={() => {
                    onButton(name);
                    
                }}
                key={name} className={clazz}>{label}</button>
            )
        }) 

        return (
            <div>
                {buttons}
            </div>
        )
    }
}
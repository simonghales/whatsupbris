import * as React from 'react';

interface Interface_ProjectNewCard_State {
    addingCard?: boolean
}

export default class ProjectNewCard extends React.Component<{}, Interface_ProjectNewCard_State> {

    constructor(props: {}) {
        super(props);
        this.state = {
          addingCard: false
        };
        this.addCard = this.addCard.bind(this);
        this.cancelAddingCard = this.cancelAddingCard.bind(this);
        this.clickedAddCard = this.clickedAddCard.bind(this);
    }

    addCard() {
        this.setState({
            addingCard: false
        });
    }

    cancelAddingCard() {
        this.setState({
            addingCard: false
        });
    }

    clickedAddCard() {
        this.setState({
            addingCard: true
        });
    }

    renderContent() {
        return (this.state.addingCard) ? (
                <div className='ProjectNewCard__form'>
                    <textarea className='ProjectNewCard__form__textarea'></textarea>
                    <div className='ProjectNewCard__form__options'>
                        <button className='ProjectNewCard__form__submitButton' onClick={this.addCard}>Submit</button>
                        <button className='ProjectNewCard__form__cancelButton' onClick={this.cancelAddingCard}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className='ProjectNewCard__addButtonWrapper'>
                    <button className='ProjectNewCard__addButton' onClick={this.clickedAddCard}>
                        Add card
                    </button>
                </div>
            );
    }

    render() {
        return (
            <div className='ProjectNewCard'>
                {this.renderContent()}
            </div>
        );
    }
}

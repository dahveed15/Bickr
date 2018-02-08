import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PhotoForm from './photo_form';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class PhotoFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumId: this.props.albumId,
      createPhoto: this.props.createPhoto,
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Add Photo To Album</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Photo Upload Modal"

        >
          <PhotoForm
            albumId={this.props.albumId}
            createPhoto={this.props.createPhoto} />
        </Modal>
      </div>
    );
  }
}

export default PhotoFormModal;

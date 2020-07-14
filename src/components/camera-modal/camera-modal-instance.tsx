import { h, Event, EventEmitter, Component, Listen, Element } from '@stencil/core';

@Component({
  tag: 'pwa-camera-modal-instance',
  styleUrl: 'camera-modal-instance.css',
  shadow: true
})
export class PWACameraModal {
  @Element() el;
  @Event() photo: EventEmitter;
  @Event() onPhoto: EventEmitter;
  @Event() noDeviceError: EventEmitter;

  handlePhoto = async (photo: any) => {
    this.photo.emit(photo);
    this.onPhoto.emit(photo);
  }

  handleNoDeviceError = async (photo: any) => {
    this.noDeviceError.emit(photo);
  }

  handleBackdropClick(e: MouseEvent) {
    if (e.target !== this.el) {
      this.photo.emit(null);
      this.onPhoto.emit(null);
    }
  }

  handleComponentClick(e: MouseEvent) {
    e.stopPropagation();
  }

  @Listen('keyup', { target: 'body' })
  handleBackdropKeyUp(e: KeyboardEvent) {
    if (e.key === "Escape") {
      this.photo.emit(null);
      this.onPhoto.emit(null);
    }
  }

  render() {
    return (
      <div class="wrapper" onClick={e => this.handleBackdropClick(e)}>
        <div class="content">
          <pwa-camera
            onClick={e => this.handleComponentClick(e)}
            handlePhoto={this.handlePhoto}
            handleNoDeviceError={this.handleNoDeviceError} />
        </div>
      </div>
    );
  }
}

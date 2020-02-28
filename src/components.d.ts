/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ActionSheetOption,
} from './definitions';

export namespace Components {
  interface PwaActionSheet {
    'cancelable': boolean;
    'header': string;
    'options': ActionSheetOption[];
  }
  interface PwaCamera {
    'facingMode': string;
    'onPhoto': (e: any) => void;
  }
  interface PwaCameraModal {
    'dismiss': () => Promise<void>;
    'present': () => Promise<void>;
  }
  interface PwaCameraModalInstance {}
  interface PwaToast {
    'duration': number;
    'message': string;
  }
}

declare global {


  interface HTMLPwaActionSheetElement extends Components.PwaActionSheet, HTMLStencilElement {}
  var HTMLPwaActionSheetElement: {
    prototype: HTMLPwaActionSheetElement;
    new (): HTMLPwaActionSheetElement;
  };

  interface HTMLPwaCameraElement extends Components.PwaCamera, HTMLStencilElement {}
  var HTMLPwaCameraElement: {
    prototype: HTMLPwaCameraElement;
    new (): HTMLPwaCameraElement;
  };

  interface HTMLPwaCameraModalElement extends Components.PwaCameraModal, HTMLStencilElement {}
  var HTMLPwaCameraModalElement: {
    prototype: HTMLPwaCameraModalElement;
    new (): HTMLPwaCameraModalElement;
  };

  interface HTMLPwaCameraModalInstanceElement extends Components.PwaCameraModalInstance, HTMLStencilElement {}
  var HTMLPwaCameraModalInstanceElement: {
    prototype: HTMLPwaCameraModalInstanceElement;
    new (): HTMLPwaCameraModalInstanceElement;
  };

  interface HTMLPwaToastElement extends Components.PwaToast, HTMLStencilElement {}
  var HTMLPwaToastElement: {
    prototype: HTMLPwaToastElement;
    new (): HTMLPwaToastElement;
  };
  interface HTMLElementTagNameMap {
    'pwa-action-sheet': HTMLPwaActionSheetElement;
    'pwa-camera': HTMLPwaCameraElement;
    'pwa-camera-modal': HTMLPwaCameraModalElement;
    'pwa-camera-modal-instance': HTMLPwaCameraModalInstanceElement;
    'pwa-toast': HTMLPwaToastElement;
  }
}

declare namespace LocalJSX {
  interface PwaActionSheet extends JSXBase.HTMLAttributes<HTMLPwaActionSheetElement> {
    'cancelable'?: boolean;
    'header'?: string;
    'onOnSelection'?: (event: CustomEvent<any>) => void;
    'options'?: ActionSheetOption[];
  }
  interface PwaCamera extends JSXBase.HTMLAttributes<HTMLPwaCameraElement> {
    'facingMode'?: string;
    'onPhoto'?: (e: any) => void;
  }
  interface PwaCameraModal extends JSXBase.HTMLAttributes<HTMLPwaCameraModalElement> {
    'onOnPhoto'?: (event: CustomEvent<any>) => void;
  }
  interface PwaCameraModalInstance extends JSXBase.HTMLAttributes<HTMLPwaCameraModalInstanceElement> {
    'onOnPhoto'?: (event: CustomEvent<any>) => void;
  }
  interface PwaToast extends JSXBase.HTMLAttributes<HTMLPwaToastElement> {
    'duration'?: number;
    'message'?: string;
  }

  interface IntrinsicElements {
    'pwa-action-sheet': PwaActionSheet;
    'pwa-camera': PwaCamera;
    'pwa-camera-modal': PwaCameraModal;
    'pwa-camera-modal-instance': PwaCameraModalInstance;
    'pwa-toast': PwaToast;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}



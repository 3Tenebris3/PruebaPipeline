import React from 'react';

interface InputErrorMessage {
    mensaje: string;
    tipoValidacion: 'numerico' | 'alfanumerico' | 'email' | undefined;
}

const InputErrorMessage: React.FC<InputErrorMessage> = ({ mensaje, tipoValidacion }) => {
    const getErrorMessage = () => {
        switch (tipoValidacion) {
            case 'numerico':
                return 'Por favor, ingrese solo números.';
            case 'alfanumerico':
                return 'Por favor, ingrese solo caracteres alfanuméricos.';
            case 'email':
                return 'Por favor, ingrese un email válido.';
            default:
                return mensaje;
        }
    };

    return (
        <div className="input-error-message">
            {getErrorMessage()}
        </div>
    );
};

export default InputErrorMessage;

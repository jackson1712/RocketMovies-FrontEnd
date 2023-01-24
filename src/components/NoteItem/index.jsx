import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
    return(
        <Container isNew={isNew}>
            <input 
            type="text" 
            value={value}
            readOnly={!isNew}
            {...rest}
            />
            <button 
            type="button"
            >
            {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    );
}

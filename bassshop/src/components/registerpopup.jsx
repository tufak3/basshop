import {useState} from 'react'
import '../styles/registermodal.css'

function RegisterPopup({ isOpen, toggleRegister, openLogin }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Регистрация:', name, email, password);
        toggleRegister();
    };
    
    return(
        <>
            {isOpen && (
                <div className="auth-modal-overlay">
                    <div className="auth-modal register-modal">
                        <div className="auth-modal-header">
                            <h2 className='text-auth'>Регистрация</h2>
                            <button className="close-button" onClick={toggleRegister}>×</button>
                        </div>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label htmlFor="register-name">Имя:</label>
                                <input 
                                    type="text" 
                                    id="register-name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                    placeholder='Введите ваше имя'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="register-email">Email:</label>
                                <input 
                                    type="email" 
                                    id="register-email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                    placeholder='Введите email'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="register-password">Пароль:</label>
                                <input 
                                    type="password" 
                                    id="register-password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    placeholder='Введите пароль'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="register-confirm-password">Подтвердите пароль:</label>
                                <input 
                                    type="password" 
                                    id="register-confirm-password" 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                    required 
                                    placeholder='Повторите пароль'
                                />
                            </div>
                            <div className="auth-buttons register-buttons">
                                <button type="submit" className="register-submit-button">Зарегистрироваться</button>
                                <button 
                                    type="button" 
                                    className="back-to-login-button" 
                                    onClick={() => {
                                        toggleRegister();
                                        openLogin();
                                    }}
                                >
                                    Вернуться к входу
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
export default RegisterPopup
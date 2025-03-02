import '../styles/loginmodal.css'
import { useState } from 'react';
function LoginPopup({ isOpen, toggleMenu, openRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Логин с:', email, password);
        toggleMenu();
    };
   
    return (
        <>
            {isOpen && (
                <div className="auth-modal-overlay">
                    <div className="auth-modal">
                        <div className="auth-modal-header">
                            <h2 className='text-auth'>Авторизация</h2>
                            <button className="close-button" onClick={toggleMenu}>×</button>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                    placeholder='Введите email'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Пароль:</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    placeholder='Введите пароль'
                                />
                            </div>
                            <div className="auth-buttons">
                                <button type="submit" className="login-button">Войти</button>
                                <button 
                                    type="button" 
                                    className="register-button" 
                                    onClick={() => {
                                        toggleMenu();
                                        openRegister();
                                    }}
                                >
                                    Регистрация
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
export default LoginPopup;

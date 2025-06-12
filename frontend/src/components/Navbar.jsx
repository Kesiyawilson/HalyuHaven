import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const { search, setSearch, getCartCount } = useContext(ShopContext);
    const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sidebar = document.querySelector('.sidebar');
            const menuIcon = document.querySelector('.menu-icon');
            const profileIcon = document.querySelector('.profile-icon');

            if (sidebar && !sidebar.contains(event.target) && menuIcon && !menuIcon.contains(event.target)) {
                setShowSidebar(false);
            }
            if (showDropdown && profileIcon && !profileIcon.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showDropdown, showSidebar]);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    const toggleSidebar = () => {
        setShowSidebar(prev => !prev);
    };

    const toggleSearchInput = () => {
        setIsSearchInputVisible(prev => !prev);
        if (isSearchInputVisible) {
            setSearch('');
        }
    };

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: '/collection', label: 'COLLECTION' },
        { path: '/about', label: 'ABOUT' },
        { path: '/contact', label: 'CONTACT' },
    ];

    const currentCartCount = getCartCount();

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 40px', maxWidth: '1200px', margin: '0 auto', width: '100%', backgroundColor: 'white', borderBottom: '1px solid #e0e0e0', height: '80px' }}>
                <div style={{ flex: '1' }}>
                    <NavLink to="/">
                        <img src={assets.logo} alt="Logo" style={{ width: '160px' }} />
                    </NavLink>
                </div>

                {!isMobile && (
                    <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '30px' }}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                style={({ isActive }) => ({
                                    color: isActive ? '#000' : '#666',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    borderBottom: isActive ? '2px solid black' : 'none',
                                    paddingBottom: '4px',
                                    transition: 'color 0.3s, border-bottom 0.3s',
                                    whiteSpace: 'nowrap'
                                })}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                )}

                <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', gap: '20px', alignItems: 'center' }}>
                    <img
                        onClick={toggleSearchInput}
                        src={assets.search_icon}
                        alt="Search"
                        style={{ width: '25px', cursor: 'pointer' }}
                    />

                    <div className="profile-icon" onClick={toggleDropdown} style={{ position: 'relative', cursor: 'pointer' }}>
                        <img src={assets.profile_icon} alt="Profile" style={{ width: '25px' }} />
                        {showDropdown && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                right: 0,
                                background: '#fff',
                                boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                                borderRadius: '4px',
                                minWidth: '120px',
                                zIndex: 100
                            }}>
                                <Link to="/login" style={{
                                    display: 'block',
                                    padding: '10px 15px',
                                    color: '#555',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap'
                                }}>Login</Link>
                                {['My Profile', 'Orders', 'Logout'].map((item) => (
                                    <div key={item} style={{
                                        padding: '10px 15px',
                                        cursor: 'pointer',
                                        color: '#555',
                                        whiteSpace: 'nowrap'
                                    }}>{item}</div>
                                ))}
                            </div>
                        )}
                    </div>

                    <NavLink to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ position: 'relative', cursor: 'pointer' }}>
                            <img src={assets.cart_icon} alt="Cart" style={{ width: '25px' }} />
                            {currentCartCount > 0 && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-5px',
                                    right: '-5px',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '18px',
                                    height: '18px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '10px'
                                }}>
                                    {currentCartCount}
                                </div>
                            )}
                        </div>
                    </NavLink>

                    {isMobile && (
                        <div className="menu-icon" onClick={toggleSidebar} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                            <img src={assets.menu_icon} alt="Menu" style={{ width: '25px' }} />
                        </div>
                    )}
                </div>
            </div>

            {isSearchInputVisible && (
                <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '15px 40px', backgroundColor: 'white', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '600px', border: '1px solid #ddd', borderRadius: '25px', padding: '8px 15px', position: 'relative', backgroundColor: 'white' }}>
                        <img src={assets.search_icon} alt="Search" style={{ position: 'absolute', left: '15px', width: '16px', height: '16px', pointerEvents: 'none', userSelect: 'none' }} />
                        <input
                            autoFocus
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', paddingLeft: '40px' }}
                            type="text"
                            placeholder="Search products..."
                        />
                    </div>
                    <button onClick={() => { setSearch(''); setIsSearchInputVisible(false); }} style={{ background: 'none', border: 'none', marginLeft: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} aria-label="Close Search">
                        <img src={assets.cross_icon} alt="Close" style={{ width: '18px', height: '18px' }} />
                    </button>
                </div>
            )}

            {isMobile && showSidebar && (
                <div className="sidebar" style={{ position: 'fixed', top: '80px', right: 0, width: '250px', height: 'calc(100vh - 80px)', background: '#fff', boxShadow: '-2px 0 5px rgba(0,0,0,0.1)', zIndex: 99, display: 'flex', flexDirection: 'column', padding: '20px', gap: '15px', animation: 'slideInRight 0.3s forwards' }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setShowSidebar(false)}
                            style={({ isActive }) => ({
                                color: isActive ? '#000' : '#666',
                                fontWeight: 500,
                                textDecoration: 'none',
                                padding: '10px 0',
                                borderBottom: '1px solid #eee',
                                transition: 'color 0.3s'
                            })}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}

            <style jsx>{`
                @keyframes slideInRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
        </>
    );
};

export default Navbar;

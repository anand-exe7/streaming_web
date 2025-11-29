import React, { useState } from 'react';
import { User, Mail, Lock, Bell, CreditCard, Monitor, Languages, LogOut, Save } from 'lucide-react';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [profileData, setProfileData] = useState({
    name: 'Anand',
    email: 'anand@email.com',
    phone: '+11111111111',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    autoPlay: true,
    dataUsage: 'high',
    language: 'english',
    subtitles: 'off'
  });

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePreferenceChange = (key, value) => {
    setPreferences({
      ...preferences,
      [key]: value
    });
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .settings-page {
          min-height: 100vh;
          background: black;
          color: white;
          padding: 80px 20px 40px;
        }

        .settings-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 100;
        }

        .logo {
          color: #e50914;
          font-size: 32px;
          font-weight: bold;
        }

        .back-btn {
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .settings-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 30px;
        }

        .settings-sidebar {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 20px;
          height: fit-content;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .settings-sidebar h2 {
          font-size: 20px;
          margin-bottom: 20px;
          color: #e50914;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          margin-bottom: 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          color: #999;
        }

        .sidebar-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .sidebar-item.active {
          background: #e50914;
          color: white;
        }

        .settings-content {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .settings-content h2 {
          font-size: 28px;
          margin-bottom: 30px;
          color: #e50914;
        }

        .section {
          margin-bottom: 40px;
        }

        .section h3 {
          font-size: 20px;
          margin-bottom: 20px;
          color: white;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #ccc;
          font-size: 14px;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.3s;
        }

        .form-group input:focus {
          border-color: #e50914;
          background: rgba(255, 255, 255, 0.15);
        }

        .toggle-option {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .toggle-option:last-child {
          border-bottom: none;
        }

        .toggle-info {
          flex: 1;
        }

        .toggle-info h4 {
          font-size: 16px;
          margin-bottom: 5px;
          color: white;
        }

        .toggle-info p {
          font-size: 13px;
          color: #999;
        }

        .toggle-switch {
          width: 50px;
          height: 26px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 13px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s;
        }

        .toggle-switch.active {
          background: #e50914;
        }

        .toggle-switch-circle {
          width: 22px;
          height: 22px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 2px;
          left: 2px;
          transition: all 0.3s;
        }

        .toggle-switch.active .toggle-switch-circle {
          left: 26px;
        }

        .select-group {
          margin-bottom: 25px;
        }

        .select-group label {
          display: block;
          margin-bottom: 8px;
          color: #ccc;
          font-size: 14px;
        }

        .select-group select {
          width: 100%;
          padding: 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          color: white;
          font-size: 14px;
          outline: none;
          cursor: pointer;
        }

        .select-group select option {
          background: #1a1a1a;
          color: white;
        }

        .plan-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          padding: 25px;
          margin-bottom: 20px;
        }

        .plan-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .plan-header h4 {
          font-size: 18px;
          color: white;
        }

        .plan-badge {
          background: #e50914;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
        }

        .plan-details {
          color: #999;
          font-size: 14px;
          line-height: 1.8;
        }

        .btn-container {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .btn-primary {
          padding: 15px 30px;
          background: #e50914;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-primary:hover {
          background: #b00610;
          transform: scale(1.02);
        }

        .btn-secondary {
          padding: 15px 30px;
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 5px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          border-color: #e50914;
          color: #e50914;
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #e50914, #b00610);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .settings-container {
            grid-template-columns: 1fr;
          }

          .settings-sidebar {
            display: flex;
            overflow-x: auto;
            padding: 15px;
          }

          .sidebar-item {
            white-space: nowrap;
          }
        }
      `}</style>

      <div className="settings-page">
        <div className="settings-navbar">
          <div className="logo">FLEXY</div>
          <button className="back-btn">← Back to Home</button>
        </div>

        <div className="settings-container">
          <div className="settings-sidebar">
            <h2>Settings</h2>
            <div
              className={`sidebar-item ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              <User size={20} />
              <span>Account</span>
            </div>
            <div
              className={`sidebar-item ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <Lock size={20} />
              <span>Security</span>
            </div>



            <div
              className={`sidebar-item ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell size={20} />
              <span>Notifications</span>
            </div>
            <div
              className={`sidebar-item ${activeTab === 'subscription' ? 'active' : ''}`}
              onClick={() => setActiveTab('subscription')}
            >
              <CreditCard size={20} />
              <span>Subscription</span>
            </div>
            <div
              className={`sidebar-item ${activeTab === 'playback' ? 'active' : ''}`}
              onClick={() => setActiveTab('playback')}
            >
              <Monitor size={20} />
              <span>Playback</span>
            </div>
            <div
              className={`sidebar-item ${activeTab === 'language' ? 'active' : ''}`}
              onClick={() => setActiveTab('language')}
            >
              <Languages size={20} />
              <span>Language</span>
            </div>
           
          </div>

          <div className="settings-content">
            {activeTab === 'account' && (
              <>
                <h2>Account Settings</h2>
                <div className="section">
                  <div className="profile-avatar">A</div>
                  <h3>Personal Information</h3>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'security' && (
              <>
                <h2>Security Settings</h2>
                <div className="section">
                  <h3>Change Password</h3>
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={profileData.currentPassword}
                      onChange={handleInputChange}
                      placeholder="Enter current password"
                    />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={profileData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={profileData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
              </>
            )}

             {activeTab === 'notifications' && (
              <>
                <h2>Notification Preferences</h2>
                <div className="section">
                  <div className="toggle-option">
                    <div className="toggle-info">
                      <h4>Email Notifications</h4>
                      <p>Receive updates about new releases and recommendations</p>
                    </div>
                    <div
                      className={`toggle-switch ${preferences.emailNotifications ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('emailNotifications', !preferences.emailNotifications)}
                    >
                      <div className="toggle-switch-circle"></div>
                    </div>
                  </div>
                  <div className="toggle-option">
                    <div className="toggle-info">
                      <h4>Push Notifications</h4>
                      <p>Get notified about new episodes and content</p>
                    </div>
                    <div
                      className={`toggle-switch ${preferences.pushNotifications ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('pushNotifications', !preferences.pushNotifications)}
                    >
                      <div className="toggle-switch-circle"></div>
                    </div>
                  </div>
                </div>
              </>
            )}

             {activeTab === 'notifications' && (
              <>
                <h2>Notification Preferences</h2>
                <div className="section">
                  <div className="toggle-option">
                    <div className="toggle-info">
                      <h4>Email Notifications</h4>
                      <p>Receive updates about new releases and recommendations</p>
                    </div>
                    <div
                      className={`toggle-switch ${preferences.emailNotifications ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('emailNotifications', !preferences.emailNotifications)}
                    >
                      <div className="toggle-switch-circle"></div>
                    </div>
                  </div>
                  <div className="toggle-option">
                    <div className="toggle-info">
                      <h4>Push Notifications</h4>
                      <p>Get notified about new episodes and content</p>
                    </div>
                    <div
                      className={`toggle-switch ${preferences.pushNotifications ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('pushNotifications', !preferences.pushNotifications)}
                    >
                      <div className="toggle-switch-circle"></div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'subscription' && (
              <>
                <h2>Subscription & Billing</h2>
                <div className="section">
                  <div className="plan-card">
                    <div className="plan-header">
                      <h4>Premium Plan</h4>
                      <span className="plan-badge">Active</span>
                    </div>
                    <div className="plan-details">
                      <p>• 4K Ultra HD streaming</p>
                      <p>• Watch on 4 devices simultaneously</p>
                      <p>• Download on 4 devices</p>
                      <p>• Next billing date: January 15, 2026</p>
                      <p>• Monthly charge: $15.99</p>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button className="btn-secondary">Change Plan</button>
                    <button className="btn-secondary">Cancel Subscription</button>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'playback' && (
              <>
                <h2>Playback Settings</h2>
                <div className="section">
                  <div className="toggle-option">
                    <div className="toggle-info">
                      <h4>Autoplay Next Episode</h4>
                      <p>Automatically play the next episode in a series</p>
                    </div>
                    <div
                      className={`toggle-switch ${preferences.autoPlay ? 'active' : ''}`}
                      onClick={() => handlePreferenceChange('autoPlay', !preferences.autoPlay)}
                    >
                      <div className="toggle-switch-circle"></div>
                    </div>
                  </div>
                  <div className="select-group">
                    <label>Video Quality</label>
                    <select
                      value={preferences.dataUsage}
                      onChange={(e) => handlePreferenceChange('dataUsage', e.target.value)}
                    >
                      <option value="low">Low (SD - 0.3 GB/hour)</option>
                      <option value="medium">Medium (HD - 1 GB/hour)</option>
                      <option value="high">High (4K - 3 GB/hour)</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'language' && (
              <>
                <h2>Language & Subtitle Settings</h2>
                <div className="section">
                  <div className="select-group">
                    <label>Display Language</label>
                    <select
                      value={preferences.language}
                      onChange={(e) => handlePreferenceChange('language', e.target.value)}
                    >
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                      <option value="japanese">Japanese</option>
                    </select>
                  </div>
                  <div className="select-group">
                    <label>Subtitle Preferences</label>
                    <select
                      value={preferences.subtitles}
                      onChange={(e) => handlePreferenceChange('subtitles', e.target.value)}
                    >
                      <option value="off">Off</option>
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="auto">Auto (Match Audio)</option>
                    </select>
                  </div>
                </div>
              </>
            )}


            <div className="btn-container">
              <button className="btn-primary" onClick={handleSave}>
                <Save size={20} />
                Save Changes
              </button>
              <button className="btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
};

export default ProfileSettings;
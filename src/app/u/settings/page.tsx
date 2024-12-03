'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    notifications: true,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePreferenceToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    console.log('Profile:', profile);
    console.log('Preferences:', preferences);
    alert('Settings saved!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Settings (Left) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div>
            <label className="block font-semibold mb-2">Name</label>
            <Input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Email</label>
            <Input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Preferences (Right) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="flex items-center justify-between mb-4">
            <span>Dark Mode</span>
            <Switch
              checked={preferences.darkMode}
              onCheckedChange={() => handlePreferenceToggle('darkMode')}
            />
          </div>
          <div className="flex items-center justify-between">
            <span>Notifications</span>
            <Switch
              checked={preferences.notifications}
              onCheckedChange={() => handlePreferenceToggle('notifications')}
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <Button onClick={handleSave} className="w-full mt-6">
        Save Settings
      </Button>
    </div>
  );
}

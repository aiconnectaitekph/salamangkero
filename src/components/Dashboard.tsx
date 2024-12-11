import React from 'react';
import { TrendingUp, Clock, Bell } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Balance Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Agent Balance</h2>
          <TrendingUp className="h-6 w-6 text-[#007bff]" />
        </div>
        <p className="text-4xl font-bold text-[#007bff]">₱10,000.00</p>
      </div>

      {/* Recent Bets */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Bets</h2>
          <Clock className="h-6 w-6 text-gray-600" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Numbers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-03-14 10:30 AM
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    12-34-56
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₱10.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Announcements</h2>
          <Bell className="h-6 w-6 text-gray-600" />
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-[#007bff] pl-4">
            <p className="text-sm text-gray-600">System maintenance scheduled for March 15, 2024</p>
            <p className="text-xs text-gray-400 mt-1">Posted 2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
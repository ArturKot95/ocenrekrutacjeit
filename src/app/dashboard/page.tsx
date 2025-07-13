"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-base-200">
        <div className="navbar bg-base-100 shadow-lg">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost text-xl">
              ← Back to Home
            </Link>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Avatar"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p className="text-lg opacity-70">
              Welcome to your protected dashboard!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Info Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">User Information</h2>
                <div className="space-y-2">
                  <p>
                    <strong>Name:</strong> {user?.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user?.email}
                  </p>
                  <p>
                    <strong>User ID:</strong> {user?.$id}
                  </p>
                  <p>
                    <strong>Created:</strong>{" "}
                    {user?.$createdAt
                      ? new Date(user.$createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Quick Actions</h2>
                <div className="space-y-2">
                  <button className="btn btn-primary w-full">
                    Edit Profile
                  </button>
                  <button className="btn btn-secondary w-full">
                    Change Password
                  </button>
                  <button className="btn btn-accent w-full">
                    View Settings
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Account Stats</h2>
                <div className="stats stats-vertical">
                  <div className="stat">
                    <div className="stat-title">Login Count</div>
                    <div className="stat-value">12</div>
                    <div className="stat-desc">↗︎ 4 (22%)</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Last Login</div>
                    <div className="stat-value">2m</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Recent Activity</h2>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Login</td>
                        <td>Just now</td>
                        <td>
                          <span className="badge badge-success">Success</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Profile Update</td>
                        <td>2 hours ago</td>
                        <td>
                          <span className="badge badge-success">Success</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Password Change</td>
                        <td>1 day ago</td>
                        <td>
                          <span className="badge badge-success">Success</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

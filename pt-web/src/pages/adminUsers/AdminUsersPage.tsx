import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {fetchData} from "src/api/http";
import {buildPath, PATHS} from "src/routes/routes";

type AdminUserRow = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export function AdminUsersPage() {
  const [rows, setRows] = useState<AdminUserRow[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetchData<AdminUserRow[]>("/users")
      .then(setRows)
      .catch(() => setRows([]));
  }, []);

  const filtered = rows.filter(
    (u) =>
      `${u.firstName} ${u.lastName}`.toLowerCase().includes(q.toLowerCase()) ||
      u.email.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div style={{maxWidth: 960, margin: "32px auto", padding: 16}}>
      <h1 style={{marginBottom: 16}}>
        Users
      </h1>
      <input
        placeholder="Search by name or email"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{width: "100%", padding: 10, marginBottom: 16}}
      />
      <ul style={{display: "grid", gap: 12}}>
        {filtered.map((u) => (
          <li
            key={u.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #eee",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <div>
              <div style={{fontWeight: 700}}>
                {u.firstName}
                {" "}
                {u.lastName}
              </div>
              <div style={{opacity: 0.8}}>
                {u.email}
              </div>
            </div>
            <div style={{display: "flex", gap: 8}}>
              <Link
                to={buildPath.adminUserGallery(u.id)}
                style={{textDecoration: "none"}}
              >
                View photos
              </Link>
              <Link
                to={PATHS.ADMIN}
                style={{textDecoration: "none"}}
              >
                Back
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

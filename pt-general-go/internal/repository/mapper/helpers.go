package mapper

import (
	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

func PgUUIDToUUID(pgUUID pgtype.UUID) uuid.UUID {
	return uuid.UUID(pgUUID.Bytes)
}

func UUIDToPgUUID(u uuid.UUID) pgtype.UUID {
	return pgtype.UUID{
		Bytes: [16]byte(u),
		Valid: true,
	}
}

func PgUUIDToUUIDPtr(pgUUID pgtype.UUID) *uuid.UUID {
	if !pgUUID.Valid {
		return nil
	}
	u := uuid.UUID(pgUUID.Bytes)
	return &u
}

func UUIDPtrToPgUUID(u *uuid.UUID) pgtype.UUID {
	if u == nil {
		return pgtype.UUID{Valid: false}
	}
	return pgtype.UUID{
		Bytes: [16]byte(*u),
		Valid: true,
	}
}

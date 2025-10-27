package utils

func StringPtrToString(s *string) string {
	if s != nil {
		return *s
	}
	return ""
}

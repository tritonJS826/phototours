package handler

import (
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"

	"github.com/gin-gonic/gin"
)

func (h *Handler) Register(ctx *gin.Context) {
	var res domain.Register
	if err := ctx.ShouldBindJSON(&res); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	result, err := h.services.AuthService.Register(ctx, &res)
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}

	ctx.JSON(http.StatusCreated, dto.RegisterResponse{
		User:  dto.MapUserToSafeUser(result.User),
		Token: result.Token,
	})
}

func (h *Handler) Login(ctx *gin.Context) {
	var login domain.Login
	if err := ctx.ShouldBindJSON(&login); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	result, err := h.services.AuthService.Login(ctx, &login)
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}

	ctx.JSON(http.StatusCreated, dto.RegisterResponse{
		User:  dto.MapUserToSafeUser(result.User),
		Token: result.Token,
	})
}

func (h *Handler) GetProfile(ctx *gin.Context) {
	userID := ctx.GetInt("userID")
	user, err := h.services.AuthService.GetProfile(ctx, int32(userID))
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapUserToSafeUser(user))
}

// export async function getProfile(req: AuthRequest, res: Response) {
//   try {
//     const userId = req.userId;
//     if (!userId) {
//       res.status(CODE_BAD_REQUEST).json({error: ERROR_UNAUTHORIZED});
//
//       return;
//     }
//     const user = await prisma.user.findUnique({where: {id: userId}});
//     if (!user) {
//       res.status(CODE_BAD_REQUEST).json({error: ERROR_UNAUTHORIZED});
//
//       return;
//     }
//     res.status(CODE_OK).json({user: safeUser(user as DbUserPick)});
//   } catch {
//     res.status(CODE_SERVER_ERROR).json({error: ERROR_PROFILE});
//   }
// }

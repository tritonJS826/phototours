import {
  deletePhoto,
  downloadPhoto,
  getUploadSignature,
  getUserPhotos,
  updatePhotoPrivacy,
  uploadPhotos,
} from 'src/controllers/photoController';
import {authenticateToken} from 'src/middleware/auth';
import express from 'express';

const router = express.Router();

// Всі роути потребують авторизації
router.use(authenticateToken);

/**
 * @swagger
 * /photos/upload-signature:
 *   post:
 *     summary: Get upload signature for Cloudinary
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isPrivate:
 *                 type: boolean
 *                 description: Whether the photo should be private
 *     responses:
 *       200:
 *         description: Upload signature generated successfully
 *       401:
 *         description: Unauthorized
 */
router.post('/upload-signature', getUploadSignature);

/**
 * @swagger
 * /photos/upload:
 *   post:
 *     summary: Upload photos metadata after Cloudinary upload
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - photos
 *             properties:
 *               photos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     publicId:
 *                       type: string
 *                     secureUrl:
 *                       type: string
 *                     originalName:
 *                       type: string
 *               isPrivate:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       201:
 *         description: Photos uploaded successfully
 *       400:
 *         description: Invalid data
 *       401:
 *         description: Unauthorized
 */
router.post('/upload', uploadPhotos);

/**
 * @swagger
 * /photos/user/{userId}:
 *   get:
 *     summary: Get user photos
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: Photos retrieved successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Access denied
 */
router.get('/user/:userId', getUserPhotos);

/**
 * @swagger
 * /photos/{photoId}/download:
 *   get:
 *     summary: Get download URL for photo
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: photoId
 *         required: true
 *         schema:
 *           type: string
 *         description: Photo ID
 *     responses:
 *       200:
 *         description: Download URL generated successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Access denied
 *       404:
 *         description: Photo not found
 */
router.get('/:photoId/download', downloadPhoto);

/**
 * @swagger
 * /photos/{photoId}/privacy:
 *   patch:
 *     summary: Update photo privacy
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: photoId
 *         required: true
 *         schema:
 *           type: string
 *         description: Photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - isPrivate
 *             properties:
 *               isPrivate:
 *                 type: boolean
 *                 description: New privacy setting
 *     responses:
 *       200:
 *         description: Privacy updated successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Access denied
 *       404:
 *         description: Photo not found
 */
router.patch('/:photoId/privacy', updatePhotoPrivacy);

/**
 * @swagger
 * /photos/{photoId}:
 *   delete:
 *     summary: Delete photo
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: photoId
 *         required: true
 *         schema:
 *           type: string
 *         description: Photo ID
 *     responses:
 *       200:
 *         description: Photo deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Access denied
 *       404:
 *         description: Photo not found
 */
router.delete('/:photoId', deletePhoto);

export {router as photoRoutes};

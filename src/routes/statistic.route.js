const express = require("express");
const router = express.Router();
const statisticController = require("../app/controllers/statistic.controller");
const { getDataVal } = require("../validations/statistic.validation");
const { authMiddleWare } = require("../app/middlewares/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Statistic
 *   description: Statistic APIs
 */

/**
 * @swagger

 * /statistics:
 *   get:
 *     summary: Get data
 *     tags: [Statistic]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json; charset=utf-8:
 *           schema:
 *             type: object
 *             properties:
 *               deviceId:
 *                 type: string
 *               date:
 *                 format: date
 *               type:
 *                 default: "list"
 *                 type: string
 *               year:
 *                 type: integer
 *                 default: 2024
 *               month: 
 *                 type: integer
 *                 default: 9
 *             required:
 *               - deviceId
 *               - date
 *     responses:
 *       '200':
 *          description: Successful
 */
router.get("/", getDataVal, authMiddleWare, statisticController.getData);

module.exports = router;

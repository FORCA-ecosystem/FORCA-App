/**
 * Middleware Express de gestion centralisée des erreurs.
 * Retourne un JSON uniforme { error: "..." }
 */
export default (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Erreur interne du serveur'
  });
};
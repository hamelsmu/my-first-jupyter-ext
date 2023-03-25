/**
 * Initialization data for the nbdev_ext extension.
 */
const plugin = {
    id: 'nbdev_ext:plugin',
    autoStart: true,
    activate: (app) => {
        console.log('JupyterLab extension nbdev_ext is activated!');
    }
};
export default plugin;
//# sourceMappingURL=index.js.map
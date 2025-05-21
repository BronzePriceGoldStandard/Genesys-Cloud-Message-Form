
<?php
 $files = scandir('Genesys-Cloud-Message-Form-main');
 echo json_encode(array_values(array_diff($files, array('.', '..'))));
?>

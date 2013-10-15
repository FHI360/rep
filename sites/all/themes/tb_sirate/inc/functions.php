<?php
/**
 * Draws a login box
 *
 */
function get_dropdown_login() {
  // Call global user object
  global $user;

  // Values for if user is logged out
  if ($user->uid == 0):
    $linktext = '<span><span>Login</span></span>';
    $link = 'user';
    $linkclass = 'login';

  // Values for if user is logged in
  else:
    $linktext = '<span>Logout</span>';
    $link = 'user/logout';
    $linkclass = 'logout';
  endif;

  // Code output for the drop-down button
  $output = '<div id="dropdown-login">';
  $output .= l($linktext, $link, array('attributes' => array('class' => array($linkclass, 'button')), 'html' => TRUE));

  // Drop-down mark-up for a logged-out user
  if ($user->uid == 0):
    $output .= '<div class="dropdown">';
    $output .= render(drupal_get_form('user_login'));
    $output .= '</div>';
  endif;

  $output .= '</div>';

  return $output;
}

/*
function tb_sirate_file_icon($variables) {
  $file = $variables['file'];
  $icon_directory = drupal_get_path('theme', 'tb_sirate') . '/images/icons';

  $mime = check_plain($file->filemime);
  $icon_url = file_icon_url($file, $icon_directory);
  return '<img alt="" class="file-icon" src="' . $icon_url . '" title="' . $mime . '" />';
}
*/
?>
